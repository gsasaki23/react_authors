import React, {useState} from 'react';

export default (props) => {
    const [name, setName] = useState(props.initName);


    const onSubmitHandler = e => {
        e.preventDefault();
        props.onSubmitProp({name});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                {props.errors.name !== undefined ? (<span className="error" style={{display:"block"}}>{props.errors.name.message}</span>):("")}
            </p>
            <input type="submit"/>
        </form>
    )
}