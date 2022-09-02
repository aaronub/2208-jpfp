import React from "react";
import { useDispatch } from "react-redux";
import { _updateStudent } from "../../redux/StudentReducer";
import { useParams, Link } from "react-router-dom";
 

const UpdateStudent = ()=>{
    const dispatch = useDispatch()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('');
    const params = useParams()

    const handleChangeFisrtName = (event)=>{
        setFirstName(event.target.value)
    }
    const handleChangeLastName = (event)=>{
        setLastName(event.target.value)
    }
    const handleChangeEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(_updateStudent(params.id, {firstName, lastName, email}))
        setFirstName('')
        setLastName('')
        setEmail('')
    } 

    return(
        <form id='update-student-form' onSubmit={handleSubmit}>
            <label htmlFor='firstName'>FirstName:</label>
            <input name='firstName' value={firstName} onChange={handleChangeFisrtName}></input>

            <label htmlFor='lastName'>LastName:</label>
            <input name='lastName' value={lastName} onChange={handleChangeLastName}></input>

            <label htmlFor='email'>Email:</label>
            <input name='email' value={email} onChange={handleChangeEmail}></input>

            <button type='submit'>Update student</button>
            <Link to={'/'}>Cancel</Link>
        </form>
    )
}


export default UpdateStudent