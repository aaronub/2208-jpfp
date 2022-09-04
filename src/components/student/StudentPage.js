import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { _getStudent } from '../../redux/StudentReducer';
import {Link} from 'react-router-dom';
import UpdateStudent from './UpdateStudent';


const StudentPage = ()=>{
    const dispatch = useDispatch()
    const params = useParams()

    React.useEffect(()=>{
        dispatch(_getStudent(params.id))
    },[])

    const student = useSelector(state => state.students)
    console.log('student:', student)

    return (
        <div>
            <div>
                { student ? <div>{student.firstName + ' ' + student.lastName}</div> : 'Student not found!'}  
            </div>
            <div>{student.email}</div>
            <div>{student.gpa}</div>
            <img src={student.imageUrl}/>
            <div>Campus:</div>
            <div>{!Array.isArray(student) 
                ?  (student.campus
                    ? <Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link>
                    : 'Not registered yet!'
                   )
                : null}
            </div>
            <UpdateStudent/>
        </div>
    )
}


export default StudentPage