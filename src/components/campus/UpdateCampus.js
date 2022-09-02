import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { _updateCampus } from "../../redux/CampusReducer";

const UpdateCampus = ()=>{
    const dispatch = useDispatch()
    const params = useParams()
    const [name, setName] = React.useState('')
    const [address, setAddress] = React.useState('')

    const handleChangeName = (event)=>{
        setName(event.target.value)
    }
    const handleChangeAddress = (event)=>{
        setAddress(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(_updateCampus(params.id, {name, address}))
        setName('')
        setAddress('')
    }

    return(
        <form id="update-campus-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input name="name" value={name} onChange={handleChangeName}></input>

            <label htmlFor="address">Address:</label>
            <input name="address" value={address} onChange={handleChangeAddress}></input>

            <button type='submit'>Update campus</button>
            <Link to={'/'}>Cancel</Link>
        </form>

    )
}

export default UpdateCampus