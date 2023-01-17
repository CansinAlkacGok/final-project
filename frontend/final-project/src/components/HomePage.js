import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

export default function HomePage() {

    return (
        <div>
            <nav>
                <NavLink to="/"> Brand Name / Logo </NavLink> <br></br>
                <NavLink to="/login"> Login </NavLink><br></br>
                <NavLink to="/users"> Register </NavLink><br></br>
            </nav>
        <Outlet/>
        </div>
    )
}