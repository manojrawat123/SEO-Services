import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AddService from './pages/Services/AddServices/AddService';



function App() {
  return (
    <>
        <Routes>
          <Route path='' Component={HomePage}></Route>
          <Route path='/services' Component={HomePage}></Route>
          <Route path='/services/:id' Component={HomePage}></Route>
          <Route path='/add-services' Component={AddService}></Route>
        </Routes>
    </>

  );
}

export default App;
