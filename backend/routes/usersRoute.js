
import express from 'express';
import {
    getAllUsers,
    createNewUser,
    loginUser,
    deleteUser,
    getSingleUser,
    updateUser,
} from "../controllers/usersController.js";;
import verifyToken from '../middlewares/verification.js';
import { usersValidation } from '../middlewares/validation.js';

const route = express.Router();

route.get("/", verifyToken, getAllUsers);

route.post("/", usersValidation, createNewUser);

route.post("/login", loginUser);

route.get("/:id", getSingleUser);

route.patch("/:id", updateUser);

route.delete("/:id", deleteUser);

export default route;
