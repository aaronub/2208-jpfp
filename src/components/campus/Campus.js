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
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.address}</p>
            <p>{props.data.description}</p>
            <img src={props.data.imageUrl}/>
            <Link to={`/campuses/${props.data.id}`}>Details about {props.data.name}</Link>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Campus