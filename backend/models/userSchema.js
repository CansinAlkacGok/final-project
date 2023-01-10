import mongoose from 'mongoose';
 
const Schema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    notes: {type: Object},
    tasks: {type: Object}
})

const usersCollection = mongoose.model("users", Schema);

export default usersCollection;