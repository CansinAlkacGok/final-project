import React, { useContext, useState } from "react";
import "../styles/NotesStyles.css";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Notes() {
  // calender
  const [value, onChange] = useState(new Date());

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

          {/*  */}

          <div className="navigations">
            <div className="side-navigation">
              <div className="profile-settings">
                <NavLink to="/home/profile"> Profile </NavLink>
                <br></br>
                <NavLink to="/home/settings"> Settings </NavLink>
                <br></br>
              </div>
              <div className="note-categories">
                <h3>Navigation</h3>
                <NavLink className="category" to="/home/all">
                  {" "}
                  All{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/home/kanban">
                  {" "}
                  Kanban{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/notes">
                  {" "}
                  Notes{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/home/todo">
                  {" "}
                  To Do's{" "}
                </NavLink>
                <br></br>
                <NavLink className="category" to="/home/notes/">
                  {" "}
                  <button>Add Section</button>{" "}
                </NavLink>
                <br></br>
              </div>
            </div>

            <div className="yellow">
              <h1 className="yellowH1">Notes</h1>
              <Outlet></Outlet>
            </div>

            <div className="red">
              <div className="purple">
                <div >
                  <Calendar onChange={onChange} value={value} />
                </div>
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

          {/*  */}
        </>
      ) : (
        <nav>
          <NavLink to="/login"> Login </NavLink>
          <br></br>
          <NavLink to="/users"> Register </NavLink>
          <br></br>
        </nav>
      )}
    </div>
  );
}
