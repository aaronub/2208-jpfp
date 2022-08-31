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


    return(
        <div>
            <p></p>
            <CreateCampus/>
            <div>
                {Array.isArray(campuses) ? campuses.map(itm=>
                    <Campus key={itm.id} data={itm}/>    
                ): null}
            </div>
        </div>

    )
}


export default Campuses;