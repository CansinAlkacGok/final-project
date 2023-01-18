import express from 'express';
import {getAllToDos, getAllWorking, getAllDone, getSingleToDo, getSingleWorking, getSingleDone, createNewToDo, updateToDo, updateWorking, deleteToDo, deleteWorking, deleteDone } from '../controllers/kanbanController.js'

const route = express.Router();

route.get("/", getAllToDos);

route.get("/working", getAllWorking);

route.get("/done", getAllDone)

route.post("/", createNewToDo);

route.get("/:id", getSingleToDo);

route.get("/working/:id", getSingleWorking);

route.get("/done/:id", getSingleDone);

route.patch("/:id", updateToDo);

route.patch("/working/:id", updateWorking)

route.delete("/:id", deleteToDo);

route.delete("/working/:id", deleteWorking);

route.delete("/done/:id", deleteDone);

export default route;
