import React from 'react';
import Student from './Studnet';
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
            {students.map(itm=>
                <Student key={itm.id} data={itm}/>    
            )}
        </div>
    )
}


export default Students;