import usersCollection from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


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

// ---- added these two controllers ---- //

export const getSingleUser = async(req,res,next)=>{

  try{
      const id = req.params.id
      const singleUser = await usersCollection.findById(id)
      res.json({success:true, user:singleUser})

  }
  catch(err){
      const error  = new Error("Id doesn't exist")
      error.status = 404;
      next(error)
  }
}

export const deleteUser = async (req,res,next) => {

    try{
      const {id} = req.params
      const existingUser = await usersCollection.findById(id)

      if(existingUser) {
        const deleteStatus = await usersCollection.deleteOne({_id:existingUser._id})
      } else {
        throw new Error("User id does not exist")
      }

    }
    catch(err) {
      next(err)
    }

}

// ---- end ---- //


export const loginUser = async (req, res, next) => {

  try {
    const user = await usersCollection.findOne({ email: req.body.email });

    if (user) {

      const password = await bcrypt.compare(req.body.password, user.password)

      if (password) {

        let token = jwt.sign({ _id: user._id, firstName: user.firstName }, process.env.TOKEN_SECRET_KEY, { expiresIn: "50 days", issuer: "CDT", audience: "users" })

        const updatedUser = await usersCollection.findByIdAndUpdate(user._id, { token: token }, { new: true })

        res.header("token", token)

        res.json({ success: true, data: updatedUser})

      } else {
        throw new Error("password doesn't match")
      }

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
