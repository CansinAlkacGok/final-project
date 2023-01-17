import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
import "./HomePage.css";
import testImage from "./testImage.jpg";

export default function HomePage() {
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      {user ? (
        <>
          <div className="header">
            <NavLink to="/"> Brand Name / Logo </NavLink> <br></br>
            <button onClick={logout}>Logout </button>
          </div>

          <div className="navigations">
            <div className="side-navigation">
              <div className="profile-settings">
                <img
                  alt=""
                  src={testImage}
                  style={{
                    width: "133px",
                    marginBottom: "2rem",
                    borderRadius: "50%",
                  }}
                ></img>
                <NavLink to="/profile"> Profile </NavLink>
                <br></br>
                <NavLink to="/settings"> Settings </NavLink>
                <br></br>
              </div>
              <div className="note-categories">
                <h3>Navigation</h3>
                <NavLink className="category" to="/notes/all">
                  {" "}
                  All{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/notes/personal">
                  {" "}
                  Personal{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/notes/business">
                  {" "}
                  Business{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/notes/education">
                  {" "}
                  Education{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/notes/education">
                  {" "}
                  <button>Add Section</button>{" "}
                </NavLink>
                <br></br>
              </div>
            </div>

            <div className="yellow">
              <h1>Outlet - Placeholder for Features in the middle</h1>
            </div>

            <div className="red">
              <div className="purple">
                <h1>Calendar</h1>
              </div>

              <div className="green">
                <h1>Spotify</h1>
              </div>

              <div className="blue">
                <h1>Other</h1>
              </div>
            </div>
          </div>
          <footer>
            <h1>Footer</h1>
          </footer>
        </>
      ) : (
        <>
          <nav>
            <NavLink to="/login"> Login </NavLink>
            <br></br>
            <NavLink to="/users"> Register </NavLink>
            <br></br>
          </nav>
        </>
      )}
      <Outlet />
    </div>
  );
}
