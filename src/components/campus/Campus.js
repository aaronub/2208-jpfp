import React from "react";

const Campus = (props)=>{
    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.address}</p>
            <p>{props.data.description}</p>
            <img src={props.data.imageUrl}/>
        </div>
    )
}

export default Campus