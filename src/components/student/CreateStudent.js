import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { _createStudent } from '../../redux/StudentReducer';

const CreateStudent = ()=>{
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const dispatch = useDispatch()

    const handleChangeFisrtName = (event)=>{
        setFirstName(event.target.value)
    }
    const handleChangeLastName = (event)=>{
        setLastName(event.target.value)
    }
    const handleChangeEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handleSubmit = ()=>{
        event.preventDefault();
        dispatch(_createStudent({firstName, lastName, email}))
    } 

    return(
        <form id='student-form' onSubmit={handleSubmit}>
            <label htmlFor='firstName'>FirstName:</label>
            <input name='firstName' value={firstName} onChange={handleChangeFisrtName}></input>

            <label htmlFor='lastName'>LastName:</label>
            <input name='lastName' value={lastName} onChange={handleChangeLastName}></input>

            <lable htmlFor='email'>Email:</lable>
            <input name='email' value={email} onChange={handleChangeEmail}></input>

            <button type='submit'>Add new student</button>
            <Link to={'/'}>Cancel</Link>
        </form>
    )
}


export default CreateStudent;