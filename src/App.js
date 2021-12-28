import './App.css';

import React from "react";
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Team from './Component/Team/Team';

function App() {
    return (
        <Routes>
            <Route path="/home" element ={<Home />} />
            <Route exact path="/" element ={<Home />} />
            <Route path="/team/:id" element = {<Team />} />
        </Routes>
    );
}

export default App;
