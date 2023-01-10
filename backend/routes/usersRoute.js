import express from 'express';
import { getAllUsers, createNewUser, loginUser, checkUserToken } from '../controllers/usersController.js';
import verifyToken from '../middlewares/verification.js';

const route = express.Router();

route.get("/",getAllUsers);

route.post("/", createNewUser);

route.post("/login", loginUser);

route.get("/checkusertoken", checkUserToken)

export default route;