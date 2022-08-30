import React from "react";
import Campuses from "./components/campus/Campuses";
import {Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav";
import Students from "./components/student/Students";

function App(){

    return(
        <>
            <Nav/>
            <Routes>
                <Route path={'campuses'} element={<Campuses/>}/>
                <Route path={'students'} element={<Students/>}/>
            </Routes>

        </>

    )
}

export default App;