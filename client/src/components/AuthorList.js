import React, {useEffect} from 'react';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

// For each author in the Main.js state "authors", show link to author detail page
export default (props) => {
    useEffect(()=>{
        props.data.setAuthors(props.data.authors);
    },[props])

    // Will work, but requires refresh
    const removeFromDom = authorID => {
        props.data.setAuthors(props.data.authors.filter(author => author._id !== authorID))
    }

    return (
        <div>
            {props.data.authors.map((author, idx)=>{
                return (
                    <div key={idx} style={{display:"block"}}>
                        {author.name}
                        <Link to={"/edit/"+author._id}>Edit</Link>
                        <DeleteButton authorID={author._id} successfulCallback={()=>removeFromDom(author._id)}>Delete</DeleteButton>
                </div>
                )
            })}
        </div>
    )
}