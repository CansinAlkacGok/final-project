import React, { useEffect, useState } from "react";
import MyContext from "./MyContext.js";
import { useNavigate } from "react-router-dom";

export default function Container(props) {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/users/checkusertoken", {
        method: "GET",
        headers: { token: token },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            setUser(result.data);
          } else {
            navigate("/login");
          }
        });
    }
  }, [navigate]);

  return (
    <MyContext.Provider value={{ user, setUser, notes, setNotes }}>
      {props.children}
    </MyContext.Provider>
  );
}
