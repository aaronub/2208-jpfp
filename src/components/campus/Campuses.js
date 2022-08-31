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


    return(
        <div>
            {Array.isArray(campuses) ? campuses.map(itm=>
                <Campus key={itm.id} data={itm}/>    
            ): null}
        </div>
    )
}


export default Campuses;