import React from 'react'
import axios from 'axios';

export default props => {
    const deleteAuthor = e => {        
        axios.delete('http://localhost:8000/api/authors/delete/' + props.authorID)
        .then(res=>{
            props.successfulCallback()
            })
        .catch(console.log)
    }
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}