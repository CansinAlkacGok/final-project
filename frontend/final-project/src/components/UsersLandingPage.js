import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
import testImage from "./testImage.jpg";
import "./UsersLandingPage.css";

export default function UsersLandingPage() {
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
            <NavLink to="/home"> Brand Name / Logo </NavLink> <br></br>
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
                <NavLink to="/home/profile"> Profile </NavLink>
                <br></br>
                <NavLink to="/home/settings"> Settings </NavLink>
                <br></br>
              </div>
              <div className="note-categories">
                <h3>Navigation</h3>
                <NavLink className="category" to="/home/notes/all">
                  {" "}
                  All{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/home/notes/personal">
                  {" "}
                  Personal{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/home/notes/business">
                  {" "}
                  Business{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/home/notes/education">
                  {" "}
                  Education{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/home/notes/education">
                  {" "}
                  <button>Add Section</button>{" "}
                </NavLink>
                <br></br>
              </div>
            </div>

            <div className="yellow">
              <h1>Outlet - Placeholder for Features in the middle</h1>
              <Outlet></Outlet>
            </div>

            <div className="red">
              <div className="purple">
                <h1>Feature</h1>
                <p>e.g. Calendar</p>
              </div>

              <div className="green">
                <h1>Feature</h1>
                <p>e.g. Spotify</p>
              </div>

              <div className="blue">
                <h1>Feature</h1>
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
    </div>
  );
}
