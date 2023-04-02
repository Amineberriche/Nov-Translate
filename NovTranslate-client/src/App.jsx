import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//components
import Header from './componements/nav/Header';
//import Add from './componements/add/Add';
import Home from './componements/home/Home';
import Profile from './pages/user/profile/Profile';
import Admin from './pages/user/admin/Admin';
import LoginUser from './pages/user/login/LoginUser';
import RegisterUser from './pages/user/register/RegisterUser';
import Edituser from './pages/user/edituser/Edituser';
import Dashboard from './pages/dashboard/board/Dashboard';
import Addcontent from './pages/dashboard/addcontent/Addcontent';
import Editlangue from './pages/dashboard/addcontent/langue/Editlangue';
//import Versions from './pages/dashboard/Versions';
import Globalview from './pages/dashboard/globalview/Globalview';
import Error from './pages/404page/error';


function App () {

    return (
      <Router>
          <Header />
          <Routes>
              <Route exact path='/' element={<Home />} /> 
              <Route path='profile/:username' element={<Profile />} />
              <Route exact path='admin' element={<Admin />} />
              <Route exact path='login' element={<LoginUser />} />
              <Route exact path='register' element={<RegisterUser />} />
              <Route path='edit/:username' element={<Edituser />} />
              <Route path='dash' element={<Dashboard />} />
              <Route path="addcontent/:id" element={<Addcontent />} />
              <Route path="editlangue/:id" element={<Editlangue />} />
              <Route exact path='error' element={<Error />} />
              <Route path="view/:id" element={<Globalview />} />
          </Routes>
      </Router>
    )
  
}

export default App