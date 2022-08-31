import React from "react";
import Campuses from "./components/campus/Campuses";
import {Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav";
import Students from "./components/student/Students";
import CampusPage from "./components/campus/CampusPage";
import StudentPage from "./components/student/StudentPage";

function App(){

    return(
        <>
            <Nav/>
            <Routes>
                <Route path={'campuses'} element={<Campuses/>}/>
                <Route path={'students'} element={<Students/>}/>
                <Route path={'campuses/:id'} element={<CampusPage/>}/>
                <Route path={'students/:id'} element={<StudentPage/>}/>
            </Routes>

        </>

    )
}

export default App;