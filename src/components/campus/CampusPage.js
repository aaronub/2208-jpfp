import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { _getCampus } from '../../redux/CampusReducer';
import UpdateCampus from './UpdateCampus';
import Unregister from './Unregister';
import { _updateStudentCampusId } from '../../redux/StudentReducer';

const CampusPage = ()=>{
    const dispatch = useDispatch()
    const params = useParams()

    React.useEffect(()=>{
        dispatch(_getCampus(params.id))
    },[])

    const campus = useSelector(state => state.campuses)


    return (
        <div>
            <div>{campus.name}</div>
            <div>{campus.address}</div>
            <div>{campus.description}</div>
            <img src={campus.imageUrl}/>
            <div>{!Array.isArray(campus) 
                ? ( campus.students 
                    ? 
                    <div>
                        <div>Students:</div>
                        {campus.students.map(itm=>
                            <div key={itm.id}>
                                <Unregister campusId={params.id} data={itm}/>
                                <div></div>
                            </div>) }   
                    </div>
                    : 'Campus not found!'
                ) 
                : null}
            </div>
            <p></p>
            <UpdateCampus/>
        </div>
    )
}


export default CampusPage