import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    const encryptedPassword = bcrypt.hashSync(user.Password,salt);
    user.Password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(Password) {
    return bcrypt.compareSync(Password, this.Password);
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, 'twitter_secret', {
        expiresIn: '1h'
    });
}

const User = mongoose.model('User', userSchema); 

export default User;