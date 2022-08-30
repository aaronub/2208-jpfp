import React from "react";

const Student = (props)=>{
    return(
        <div>
            <h1>{props.data.firstName}</h1>
            <h1>{props.data.lastName}</h1>
            <p>{props.data.email}</p>
            <p>{props.data.gpa}</p>
            <img src={props.data.imageUrl}/>
        </div>
    )
}

export default Student