import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { _updateStudentCampusId } from '../../redux/StudentReducer';
import { _getCampus } from '../../redux/CampusReducer';



const Unregister = (props)=>{
    const dispatch = useDispatch()
    const [change, setChange] = React.useState(false)

    const handleClick = ()=>{
        dispatch(_updateStudentCampusId(props.data.id, {campusId: null}));
        setChange(!change)
        // dispatch(_getCampus(props.campusId))
    }

    React.useEffect(()=>{
        dispatch(_getCampus(props.campusId))
    },[change])

    return(
        <div>
            <Link key={props.data.id} to={`/students/${props.data.id}`}>{props.data.firstName+' '+ props.data.lastName}</Link>
            <button onClick={handleClick}>Unregister</button>
        </div>
    )
}

export default Unregister



