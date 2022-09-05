import React from 'react';
import {Link} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { _getCampuses } from '../redux/CampusReducer';
import { _getStudents } from '../redux/StudentReducer';


const Nav = ()=>{
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(_getCampuses())
    },[])
    const campuses = useSelector(state=>state.campuses)

    React.useEffect(()=>{
        dispatch(_getStudents())
    },[])
    const students = useSelector(state=>state.students)

    return(
        (campuses.length || !Array.isArray(campuses)) && (students.length || !Array.isArray(students))
        ?
            <nav>
                <Link to={'/campuses'}>All Campuses({campuses.length})!!</Link>
                <span> </span>
                <Link to={'/students'}>All Students({students.length})!!</Link>
            </nav>
        :
            <h1>Loading...</h1>

    )
}

export default Nav