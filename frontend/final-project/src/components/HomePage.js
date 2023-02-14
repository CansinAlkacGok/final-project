import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/InPlace.png";
import "../styles/UsersLandingPage.css";

export default function HomePage() {
  const [clicked, setClicked] = useState(true);
  return (
    <div className="homePageContainer">
      <nav className="navigationLinks">
        <div className="homeGrid">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo"
              className="logo"
              onClick={() => setClicked(true)}
            ></img>
          </NavLink>{" "}
        </div>
        <div className="homeGrid">
          <NavLink to="/users" className="navReg">
            {" "}
            <button className="startButton" onClick={() => setClicked(false)}>
              Register
            </button>{" "}
          </NavLink>
        </div>
        <div className="homeGrid">
          <NavLink to="/login" className="navLogin">
            <button className="startButton" onClick={() => setClicked(false)}>
              Login
            </button>{" "}
          </NavLink>
        </div>

        <div className="homeGrid text">
          {clicked === true && (
            <>
              <p className="teal1">Organization</p>
              <p className="teal2"> Made </p>
              <p className="teal3"> Easy</p>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
