import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { _createCampus } from '../../redux/CampusReducer';

const CreateCampus = () => {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [warning, setWarning] = React.useState('')
    const dispatch = useDispatch()

    const handleChangeName = (event)=>{
        setName(event.target.value)
    }
    const handleChangeAddress = (event)=>{
        setAddress(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (name && address) {
            dispatch(_createCampus({name, address}))        
        } else {
            setWarning('Both boxes need to be filled!')
        }
        setName('');
        setAddress('')
    }

    console.log()

    return(
        <form id='campus-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input name='name' value={name} onChange={handleChangeName}></input>

            <label htmlFor='address'>Address:</label>
            <input name='address' value={address} onChange={handleChangeAddress}></input>

            <button class='submit' type='submit'>Add new campus</button>
            <Link to={'/'}>Cancel</Link>
            <div>{warning}</div>
        </form>
    )
}

export default CreateCampus;