import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UsersLandingPage from "./components/UsersLandingPage";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import HomePage from "./components/HomePage";

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} >
          <Route path="/login" element={<Login></Login>} />
          <Route path="/users" element={<Register></Register>} />
        </Route>
        <Route path="/home" element={<UsersLandingPage></UsersLandingPage>} />
      </Routes>
    </div>
  );
}

export default App;
