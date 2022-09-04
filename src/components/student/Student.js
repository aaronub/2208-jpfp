import React from "react";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { _deleteStudent } from "../../redux/StudentReducer";


const Student = (props)=>{
    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(_deleteStudent(props.data.id))
    }

    return(
        <div>
            <h1>{props.data.firstName}</h1>
            <h1>{props.data.lastName}</h1>
            <p>{props.data.email}</p>
            <p>{props.data.gpa}</p>
            <img src={props.data.imageUrl}/>
            <Link to={`/students/${props.data.id}`}>Details about {props.data.firstName+' '+props.data.lastName}</Link>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Student