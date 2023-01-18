import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersLandingPage from "./components/UsersLandingPage";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import HomePage from "./components/HomePage.js";
import Profile from './components/ProfilePage.js';
import EditProfileUser from "./components/EditProfilePage.js";

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} >
          <Route path="/login" element={<Login></Login>} />
          <Route path="/users" element={<Register></Register>} />
        </Route>
        <Route path="/home" element={<UsersLandingPage></UsersLandingPage>} />
        <Route path ="/profile" element={<Profile></Profile>}/>
        <Route path ='/editprofile' element= {<EditProfileUser></EditProfileUser>} />
      </Routes>
    </div>
  );
}

export default App;
