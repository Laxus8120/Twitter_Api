import TweetService from "../Services/Tweet-Service.js";

const tweetService = new TweetService();

export const createTweet = async (req,res) =>{

    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success : true,
            message : 'Successfully created a new tweet ',
            data : response,
            err : {}
        }) 
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : 'not able to  create a new tweet ',
            data : {},
            err : error
        }) 
    }
}
