import React from 'react';
import Campus from './Campus';
import {useSelector, useDispatch} from 'react-redux';
import { _getCampuses } from '../../redux/CampusReducer';
import CreateCampus from './CreateCampus';


const Campuses = ()=>{

    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(_getCampuses())
    },[])

    const campuses = useSelector(state=>state.campuses)
    const students  = useSelector(state=>state.students)
    console.log('Campuses component, students', students)

    return(
        <div>
            <p></p>
            <CreateCampus/>
            <p></p>
            <select>
                <option>Sorted by enrollments counts</option>
            </select>
            <div>
                {Array.isArray(campuses) ? campuses.map(itm=>
                    <Campus key={itm.id} campusId={itm.id} data={itm}/>    
                ): null}
            </div>
        </div>
    )
}


export default Campuses;