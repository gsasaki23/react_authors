import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // set authors to list of all authors from DB
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                // set sorted author array to state "authors"
                setAuthors(res.data.sort((authorOne,authorTwo)=>(authorOne.name > authorTwo.name)? 1:-1));
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    },[])

    return (
        <>
            <Link to="/new">Add an author</Link>
            <hr />
            <h3>We have the following authors:</h3>
            {/* only loads if loaded. sends list of authors AND function removeFromDom to child class */}
            {loaded && <AuthorList data={{authors,setAuthors}}/>}
        </>
    )
}
