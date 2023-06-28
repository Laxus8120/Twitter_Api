import express from "express";
import { createTweet, getTweet } from  '../../controller/Tweet-controller.js'
import { toggleLike } from "../../controller/Like-controller.js";
import { createComment } from "../../controller/comment-Controller.js";
import { signup, login } from "../../controller/auth-controller.js";
import {authenticate} from '../../middleware/authenticate.js'
const router = express.Router();

router.post('/tweets',createTweet);
router.post('/like/toggle',toggleLike);
router.post('/comments',authenticate, createComment);
router.get('/tweets/:id', getTweet)
router.post('/signup',signup);
router.post('/login', login);


export default router;