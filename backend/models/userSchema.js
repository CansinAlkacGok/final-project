import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
 
const Schema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    notes: {type: Object},
    tasks: {type: Object}
})

Schema.pre("save", function (next) {

    if(this.isModified("password")){
        
        const hashedPassword = bcrypt.hashSync(this.password, 10)
        this.password = hashedPassword;
        
         console.log("password hashed and store into DB")
    }

        next();
})

const UsersCollection = mongoose.model("users", Schema);

UsersCollection.createIndexes({email: -1})

export default UsersCollection;