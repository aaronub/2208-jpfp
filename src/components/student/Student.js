import React from "react";
import {Link} from 'react-router-dom';


const Student = (props)=>{
    return(
        <div>
            <h1>{props.data.firstName}</h1>
            <h1>{props.data.lastName}</h1>
            <p>{props.data.email}</p>
            <p>{props.data.gpa}</p>
            <img src={props.data.imageUrl}/>
            <Link to={`/students/${props.data.id}`}>{props.data.firstName+' '+props.data.lastName}</Link>
        </div>
    )
}

export default Student