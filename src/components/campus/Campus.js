import React from "react";
import { Link } from "react-router-dom";

const Campus = (props)=>{
    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.address}</p>
            <p>{props.data.description}</p>
            <img src={props.data.imageUrl}/>
            <Link to={`/campuses/${props.data.id}`}>{props.data.name}</Link>
        </div>
    )
}

export default Campus