import React, { useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

export default () => {
    const [errors, setErrors] = useState([]);

    // Called back from AuthorForm, creates new product in DB
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res=>{
                console.log("Response: ",res);
                navigate("/");
            })
            .catch(err=>setErrors(err.response.data.errors))
    }

    return (
        <div>       
            <Link to="/">Home</Link>     
            <h3>Add a new author</h3>
            <AuthorForm onSubmitProp={createAuthor} initName="" errors={errors}/>
            <Link to={"/"}>Cancel</Link>
        </div>
    )
}