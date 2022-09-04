import React from 'react';
import Student from './Student';
import {useSelector,useDispatch} from 'react-redux';
import { _getStudents } from '../../redux/StudentReducer';
import CreateStudent from './CreateStudent';
import { filterStudent } from '../../redux/StudentReducer';



const Students = ()=>{
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(_getStudents())
    },[])
    const students = useSelector(state=>state.students)
    const [sortedStudents, setSortedStudents] = React.useState(students)

    const hanldeSorting = (event)=>{
        const sorting = event.target.value
        if (sorting === 'gpa') {
            setSortedStudents([...students].sort((a, b)=> a[sorting]-b[sorting])) 
        } 
        if (sorting === 'lastName') {
            setSortedStudents([...students].sort((a, b)=>{
                let fa = a.lastName.toLowerCase(),
                    fb = b.lastName.toLowerCase();       
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })) 
        }

    }  
    const showUnregisteredStudents = ()=>{
        dispatch(filterStudent(students))
    }

    // console.log('students', students)
    // Always [] before select onChange????
    // console.log('sortedStudents', sortedStudents)

    return(
        <div>
            <p></p>
            <CreateStudent/>
            <p></p>
            <select onChange={hanldeSorting}>
                <option value='lastName'>Sorted by lastName</option>
                <option value='gpa'>Sorted by GPA</option>
            </select>
            <p></p>
            <button onClick={showUnregisteredStudents}>Unregistered students list</button>
            <div>
                {Array.isArray(students)
                ? (sortedStudents.length
                    ? sortedStudents.map(itm=><Student key={itm.id} data={itm}/>)
                    : students.map(itm=><Student key={itm.id} data={itm}/>)
                  )   
                : null}
            </div>
        </div>
    )
}


export default Students;