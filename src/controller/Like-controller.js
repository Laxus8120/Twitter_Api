import LikeService from "../Services/like-service.js";

const likeService = new LikeService();

export const toggleLike  = async (req,res)=>{
    try {
        const response  = await likeService.toggleLike(req.query.modelId,req.query.modeType,req.body.userId);
        return res.status(200).json({
            success: true,
            data : response,
            message: "succesfully toggle",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            data : {},
            message: 'Something went wrong ',   
            err : error
        })
    }
}