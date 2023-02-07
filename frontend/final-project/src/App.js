import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersLandingPage from "./components/UsersLandingPage";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import HomePage from "./components/HomePage";
import Profile from "./components/ProfilePage";
import Settings from "./components/Settings";
import Notes from "./components/Notes.js";
import EditProfileUser from "./components/EditProfilePage.js";
import Kanban from "./components/Kanban.js";
import TodoList from "./components/TodoList.js";


function App() {
  return (
    <div className="App">
      <Routes>
      
        <Route path="/" element={<HomePage></HomePage>}>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/users" element={<Register></Register>} />
        </Route>

        <Route path="/home" element={<UsersLandingPage></UsersLandingPage>}>
          <Route path="/home/profile" element={<Profile></Profile>}></Route>
          <Route path="/home/settings" element={<Settings></Settings>}></Route>
          <Route path ='/home/editprofile' element= {<EditProfileUser></EditProfileUser>} />
          <Route path="/home/all" element={<Kanban></Kanban>}></Route>
          <Route path="/home/kanban" element={<Kanban></Kanban>}></Route>
          <Route path="/home/" element={<Kanban></Kanban>}></Route>
          <Route path="/home/" element={<Kanban></Kanban>}></Route>
          <Route path="/home/todo" element={<TodoList></TodoList>}></Route>
          <Route path="/home/notes" element = {<Notes></Notes>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
