import express from "express";
import { createTweet } from  '../../controller/Tweet-controller.js'

const router = express.Router();

router.post('/tweets', createTweet);

export default router;