import React, { useContext } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import UsersLandingPage from "./components/UsersLandingPage";
import Register from "./components/Register.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          {" "}
          <NavLink to="/"> Brand Name / Logo </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/login"> Login </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/users"> Register </NavLink>{" "}
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<UsersLandingPage></UsersLandingPage>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/users" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
