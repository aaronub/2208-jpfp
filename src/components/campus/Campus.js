import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { _deleteCampus} from "../../redux/CampusReducer";

const Campus = (props)=>{
    const dispatch = useDispatch()

    const handleDelete = ()=>{
        dispatch(_deleteCampus(props.data.id))
    }

    return(
        <div class='single-item'>           
            <h1 class='list-title'><Link to={`/campuses/${props.data.id}`}>{props.data.name}</Link></h1>
            <p>{props.data.address}</p>
            <p>{props.data.description}</p>
            <Link to={`/campuses/${props.data.id}`}><img src={props.data.imageUrl}/></Link>
            <br/>
            <Link to={`/campuses/${props.data.id}`}>Details about {props.data.name}</Link>
            <button class='x' onClick={handleDelete}>X</button>
        </div>
    )
}

export default Campus