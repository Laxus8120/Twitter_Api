import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

    content : {
        type : String,
        required : true
    },
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    onModel : {
        type : String,
        required : true,
        enum : ['Tweet','Comment']
    },
    commentable: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'onModel',
        required : true
    },
    comments : [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        }
    ]
},{timestamps:true});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;