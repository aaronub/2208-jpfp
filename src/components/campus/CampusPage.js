import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { _getCampus } from '../../redux/CampusReducer';
import {Link} from 'react-router-dom'


const CampusPage = ()=>{
    const dispatch = useDispatch()
    const params = useParams()

    React.useEffect(()=>{
        dispatch(_getCampus(params.id))
    },[])

    const campus = useSelector(state => state.campuses)
    console.log('campus:', campus)

    return (
        <div>
            <div>{campus.name}</div>
            <div>{campus.address}</div>
            <div>{campus.description}</div>
            <img src={campus.imageUrl}/>
            <div>Students:</div>
            <div>{!Array.isArray(campus) 
                ? campus.students.map(itm=>
                    <Link to={`/students/${itm.id}`}>{itm.firstName+' '+itm.lastName}</Link>
                  ) 
                : null}
            </div>
        </div>
    )
}


export default CampusPage