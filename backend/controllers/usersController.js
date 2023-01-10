import usersCollection from "../models/userSchema.js";

export const getAllUsers = async (req, res, next) => {

    try {
        const users = await usersCollection.find()
        //res.json({ success: true, users: users });
        res.json(users)
    }
    catch (err) {
        next(err);
    }

}


export const createNewUser = async (req, res, next) => {

    try {
        const createUser = new usersCollection(req.body)
        await createUser.save();
        res.json({ success: true, users: createUser });
    }
    catch (err) {
        next(err)
    }

}