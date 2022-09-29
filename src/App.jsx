import React from 'react';
import Home from "./Home";
import {Routes,Route} from "react-router-dom";
import Services from "./Services"
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";

const App=()=>{
    
    return (
        <React.Fragment>
        <Navbar/>
        <Routes>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Services" element={<Services/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route  path="*" element={<Home/>}/>
        </Routes>
        </React.Fragment>
    )
}

export default App;