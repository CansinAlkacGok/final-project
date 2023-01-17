import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UsersLandingPage from "./components/UsersLandingPage";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import Settings from "./components/Settings";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/users" element={<Register></Register>} />
        </Route>

        <Route path="/home" element={<UsersLandingPage></UsersLandingPage>}>

          <Route path="/home/profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="/home/settings" element={<Settings></Settings>}></Route>

          <Route path="/home/notes/all" element={<Notes></Notes>}></Route>
          <Route path="/home/notes/personal" element={<Notes></Notes>}></Route>
          <Route path="/home/notes/business" element={<Notes></Notes>}></Route>
          <Route path="/home/notes/education" element={<Notes></Notes>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
