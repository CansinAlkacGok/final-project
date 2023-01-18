import React, { useContext } from "react";
import MyContext from "../context/MyContext.js";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const editProfile = () => {
    navigate("/editprofile")
  }

  const deleteUserAccount = () => {
    fetch(`/users/${user._id}`,
      {
        method: "DELETE",
        headers: { token: localStorage.getItem("token") }
      })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          setUser(null)
          localStorage.removeItem("token")
          navigate("/")
        } else {
          console.log(result.message)
        }
      })

  }

  const backToMainPage = () => {
    navigate("/home")
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={backToMainPage}> Back to main page </button>

      {
        user && <>

          <h2>{user.firstName} {user.lastName}</h2>
          <button onClick={editProfile}>Edit</button>
          
          <div>
            <h4>First Name</h4>
            <p> {user.firstName} </p>
            <h4>Last Name</h4>
            <p> {user.lastName} </p>
            <h4>Email</h4>
            <p> {user.email} </p>
            <h4>Password</h4>
            <p> ***************** </p>
          </div>

          {/*     <img src={user.profileImage} width="300" alt="profileImage" /> */}
          
          <button onClick={logout}>logout</button>
          <button onClick={deleteUserAccount}>Delete User</button>
        </>
      }
    </div>
  );
}

