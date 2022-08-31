import React from 'react';
import Student from './Student';
import {useSelector,useDispatch} from 'react-redux';
import { _getStudents } from '../../redux/StudentReducer';
import CreateStudent from './CreateStudent';



const Students = ()=>{
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(_getStudents())
    },[])
    const students = useSelector(state=>state.students)

    return(
        <div>
            <p></p>
            <CreateStudent/>
            <div>
                {Array.isArray(students)
                ? students.map(itm=><Student key={itm.id} data={itm}/>)
                : null}
            </div>
        </div>
    )
}


export default Students;