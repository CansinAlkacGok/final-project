import React, {useContext} from 'react';
import {NavLink, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomaPage.js'
import Register from './components/Register.js';
import Login from './components/Login.js';


function App() {
  return (
    <div className="App">

      <ul>
        <li> <NavLink to= "/"> Brand Name / Logo </NavLink> </li>
        <li> <NavLink to= "/login"> Login </NavLink> </li>
        <li> <NavLink to= "/users"> Register </NavLink> </li>
      </ul>
    
      <Routes> 
          <Route path ='/' element= { <HomePage></HomePage>} /> 
          <Route path ='/login' element= {<Login></Login>} />
          <Route path ='/users' element= {<Register></Register>} />
        </Routes>

    </div>
  );
}

export default App;
