import React from "react";
import { NavLink } from "react-router-dom";

export default function UsersLandingPage() {

  //it will return our users landing page when users log-in

  return <div>Users Landing Page
    <NavLink to="/profile">Profile</NavLink>
  </div>;
}
