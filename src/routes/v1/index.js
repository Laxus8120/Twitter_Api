import express from "express";
import { createTweet, getTweet } from  '../../controller/Tweet-controller.js'
import { toggleLike } from "../../controller/Like-controller.js";
import { createComment } from "../../controller/comment-Controller.js";
const router = express.Router();

router.post('/tweets', createTweet);
router.post('/like/toggle',toggleLike);
router.post('/comments', createComment);
router.get('/tweets/:id', getTweet)


export default router;