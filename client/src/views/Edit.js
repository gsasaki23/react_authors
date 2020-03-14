import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

export default (props) => {
    const [author,setAuthor] = useState({});
    const [loaded,setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    // On initial load, get DB info
    useEffect(() => {     
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => {
                // only if id worked - for some reason, catch didn't work
                if (res.data != null){
                    setAuthor({...res.data});
                    setLoaded(true);
                }
            })
            .catch(console.log)
    }, [props])

    // When a new form is submitted, PUT request to backend
    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/authors/update/${props.id}`, author)
            .then(res=>{
                console.log("Response: ",res)
                // route back to detail
                navigate('/')
            })
            .catch(err=>setErrors(err.response.data.errors))
    }

    return (
        <div>
            <Link to="/">Home</Link>            
            <h3>Edit this author</h3>
            {loaded 
                ? <AuthorForm onSubmitProp={updateAuthor} initName={author.name} errors={errors} /> 
                : <><p>We couldn't find the author you are looking for.</p>
                <Link to={"/new"}>Would you like to try adding this author?<br/></Link></>
            }
            <Link to={"/"}><br />Cancel</Link>
        </div>
    )
}