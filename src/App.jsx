import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AddService from './pages/Services/AddServices/AddService';
import ServiceDetails from './pages/Services/ServiceDetails/ServiceDetails';
import NavMenu from './component/Navbar/Navbar';



function App() {
  return (
    <>
    <NavMenu />
    <div className="mt-20">
        <Routes>
          <Route path='' Component={HomePage}></Route>
          <Route path='/services' Component={HomePage}></Route>
          <Route path='/services/:slug' Component={ServiceDetails}></Route>
          <Route path='/add-services' Component={AddService}></Route>
        </Routes>
    </div>
    </>

  );
}

export default App;
