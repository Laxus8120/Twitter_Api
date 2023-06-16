import express from "express";
import { createTweet, getTweet } from  '../../controller/Tweet-controller.js'
import { toggleLike } from "../../controller/Like-controller.js";
import { createComment } from "../../controller/comment-Controller.js";
import { signup } from "../../controller/auth-controller.js";
const router = express.Router();

router.post('/tweets', createTweet);
router.post('/like/toggle',toggleLike);
router.post('/comments', createComment);
router.get('/tweets/:id', getTweet)
router.post('/signup',signup);


export default router;