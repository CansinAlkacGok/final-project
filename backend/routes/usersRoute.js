import express from 'express';
import { getAllUsers, createNewUser, loginUser, checkUserToken, deleteUser, getSingleUser } from '../controllers/usersController.js';
import verifyToken from '../middlewares/verification.js';

const route = express.Router();

route.get("/", getAllUsers);

route.post("/", createNewUser);

route.post("/login", loginUser);

route.get("/checkusertoken", checkUserToken);

// ---- added these two routes ---- //

route.get("/:id", getSingleUser)

route.delete("/:id", deleteUser);

// ---- end ---- //

export default route;