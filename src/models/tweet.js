const mongoose  = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content :{
        type : String,
        required : true
    },
    userEmail : {
        type : String
    },
    comments : [
        {
            content : {
                type : String,
                required : true
            }
        }
    ]
},{timestamps:true});

const Tweet  = mongoose.model('Tweet', tweetSchema);
module.exports  = Tweet;