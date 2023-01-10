import usersCollection from "../models/userSchema.js";
import jwt from "jsonwebtoken";


export const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersCollection.find(); //res.json({ success: true, users: users });
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const createNewUser = async (req, res, next) => {
  try {
    const createUser = new usersCollection(req.body);
    await createUser.save();
    res.json({ success: true, users: createUser });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await usersCollection.findOne({ email: req.body.email });

    if (await user.comparePassword(req.body.password)) {
      let token = jwt.sign(
        { _id: user._id, firstName: user.firstName },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: "1h", issuer: "CDT", audience: "users" }
      );

      const updatedUser = await usersCollection.findByIdAndUpdate(
        user._id,
        { token: token },
        { new: true }
      );

      res.header("token", token);
      res.json({ success: true, data: updatedUser.publicFields() });
    } else {
      throw new Error("Email doesn't exist");
    }
  } catch (err) {
    next(err);
  }
};

export const checkUserToken = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

    const user = await usersCollection.findById(payload._id);
  } catch (err) {
    next(err);
  }
};
