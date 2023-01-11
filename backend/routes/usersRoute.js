import express from 'express';
import { getAllUsers, createNewUser, loginUser, checkUserToken } from '../controllers/usersController.js';
import verifyToken from '../middlewares/verification.js';
import { usersValidation } from '../middlewares/validation.js';

const route = express.Router();

route.get("/",verifyToken, getAllUsers);

route.post("/", usersValidation, createNewUser);

route.post("/login", loginUser);

route.get("/checkusertoken", checkUserToken)

export default route;