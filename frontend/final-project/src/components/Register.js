import React from 'react'
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Register() {

  const navigate = useNavigate()

  const registiration = (e) => {

    e.preventDefault()

    const data = new FormData(e.target)
   

    fetch("/users",
      {
        method: "POST",
        body: data
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result.success) {

          toast.success("Successfully Registered!")

          setTimeout(() => {
            navigate("/login")
          }, 2000)

        } else {
          toast.error(JSON.stringify(result.message))
        }
      })
  }

  return (

    <div>
      <h1>Register</h1>
      <form onSubmit={registiration}>
        <label>First Name </label> <br></br>
        <input type="text" name="firstName" required /><br></br>
        <label>Last Name </label> <br></br>
        <input type="text" name="lastName" required /> <br></br>
        <label>Email </label> <br></br>
        <input type="email" name="email" required /><br></br>
        <label>Password </label> <br></br>
        <input type="password" name="password" required /><br></br>
        {/*      <label>Profile Image </label> <br></br>
        <input type="file" name="image" /> <br></br> */}
        <button>Register</button>
      </form>
      <Toaster position="top-center" />
    </div>
  )
}
