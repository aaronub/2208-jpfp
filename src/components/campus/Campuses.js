import React from 'react';
import Campus from './Campus';
import {useSelector, useDispatch} from 'react-redux';
import { _getCampuses } from '../../redux/CampusReducer';


const Campuses = ()=>{

    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(_getCampuses())
    },[])

    const campuses = useSelector(state=>state.campuses)
    // console.log('hi',campuses)

    return(
        <div>
            {campuses.map(itm=>
                <Campus key={itm.id} data={itm}/>    
            )}
        </div>
    )
}


export default Campuses;