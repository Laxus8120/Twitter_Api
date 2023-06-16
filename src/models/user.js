import mongoose from "mongoose";
import bcypt from 'bcrypt';

const userSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true,
    },
    name :{
        type : String,
        required : true
    }
},{timestamps : true});

userSchema.pre('save',function (next){
    const user = this;
    const salt  = bcypt.genSaltSync(9);
    const encryptedPassword = bcypt.hashSync(user.Password,salt);
    user.Password = encryptedPassword;
    next();
})

const User = mongoose.model('User', userSchema); 

export default User;