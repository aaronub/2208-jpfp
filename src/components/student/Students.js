import React from 'react';
import Student from './Student';
import {useSelector,useDispatch} from 'react-redux';
import { _getStudents } from '../../redux/StudentReducer';



const Students = ()=>{
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(_getStudents())
    },[])
    const students = useSelector(state=>state.students)

    return(
        <div>
            {Array.isArray(students)
            ? students.map(itm=><Student key={itm.id} data={itm}/>)
            : null}
        </div>
    )
}


export default Students;