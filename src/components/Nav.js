import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ()=>{
    return(
        <nav>
            <Link to={'/campuses'}>All Campuses!!</Link>
            <Link to={'/students'}>All Students!!</Link>
        </nav>
    
    )
}

export default Nav