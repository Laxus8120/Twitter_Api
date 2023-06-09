import { CommentRepository, TweetRepository } from "../Repository/index.js";

class CommentService {
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository  = new TweetRepository();
    }

    async create(modelId,modelType, userId, content){
        if(modelType == 'Tweet'){
            var commentable = await this.tweetRepository.find(modelId);
        }
        else if(modelType == 'Comment'){
            var commentable = await this.commentRepository.find(modelId);
        }
        else {
            throw new Error('unknown model type');
        }
        const comment = await this.commentRepository.create({
            content : content,
            userId: userId,
            onModel : modelType,
            commentable: modelId,
            comments: []
        })
        commentable.Comments.push(comment);
        await commentable.save();

        return comment;
    }
}

export default CommentService;