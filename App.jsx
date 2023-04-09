import React from 'react';

import { Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";

import Survey from "./Survey.jsx";

import Results from './Results.jsx'




function App() {

  // let paramString = urlString.split('?')[1];
  
  // let queryString = new URLSearchParams(paramString);

  return (

    <Routes>

      <Route path="/get/" element={<Survey />}></Route>

      <Route path="/" element={<Home />} exact></Route>

      <Route path="/login" exact></Route>

      <Route path="/logout" exact></Route>

      <Route path="/results" element={<Results />}></Route>


      
    </Routes>
    
  )
  
}

export default App;