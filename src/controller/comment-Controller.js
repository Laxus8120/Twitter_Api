import CommentService from "../Services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res) =>{

    try {
        const response = await commentService.create(req.query.modelId,req.query.modelType, req.userId, req.body.content);
        return res.status(201).json({
            success : true,
            message : 'Successfully created a new Comment ',
            data : response,
            err : {}
        }) 
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : 'not able to  create a new Comment ',
            data : {},
            err : error
        }) 
    }
}
