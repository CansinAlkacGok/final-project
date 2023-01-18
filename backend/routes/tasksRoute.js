import express from 'express';
import {getAllTasks, getAllCompletedTasks, getSingleTask, getSingleCompletedTask, createNewTask, updateTask, deleteTask, deleteCompletedTask} from '../controllers/tasksController.js'

const route = express.Router();

route.get("/", getAllTasks);

route.get("/completed", getAllCompletedTasks)

route.post("/", createNewTask);

route.get("/:id", getSingleTask);

route.get("/completed/:id", getSingleCompletedTask)

route.patch("/:id", updateTask);

route.delete("/:id", deleteTask);

route.delete ("/completed/:id", deleteCompletedTask)

export default route;