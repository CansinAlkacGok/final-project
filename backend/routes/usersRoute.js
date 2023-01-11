import express from "express";
import {
  getAllUsers,
  createNewUser,
  loginUser,
  checkUserToken,
  deleteUser,
  getSingleUser,
  updateUser,
} from "../controllers/usersController.js";
import verifyToken from "../middlewares/verification.js";

const route = express.Router();

route.get("/", getAllUsers);

route.post("/", createNewUser);

route.post("/login", loginUser);

route.get("/checkusertoken", checkUserToken);

route.get("/:id", getSingleUser);

route.patch("/:id", updateUser);

route.delete("/:id", deleteUser);

export default route;
