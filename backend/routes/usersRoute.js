import express from 'express';
import { getAllUsers, createNewUser } from '../controllers/usersController.js';

const route = express.Router();

route.get("/", getAllUsers);

route.post("/", createNewUser)

export default route;