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
        <div class='single-student-item'>
            <h1><Link to={`/students/${props.data.id}`}>{props.data.firstName + ' ' + props.data.lastName}</Link></h1>
            <p>{props.data.email}</p>
            <p>{props.data.gpa}</p>
            <Link  to={`/students/${props.data.id}`}><img id='student-image' src={props.data.imageUrl}/></Link>
            <br/>
            <Link to={`/students/${props.data.id}`}>Details about {props.data.firstName+' '+props.data.lastName}</Link>
            <button class='x' onClick={handleDelete}>X</button>
        </div>
    )
}

export default Student