import express from 'express';
import {connect} from './config/database.js'

import apiRoutes from './routes/index.js';
import bodyParser from 'body-parser';

import{TweetRepository, UserRespository} from './Repository/index.js';
import LikeService from './Services/like-service.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRoutes)

app.listen(3000,async()=>{

    console.log(`Server started`);
    await connect(); 
    console.log('mongo server connected');
    
    // const userRepo = new UserRespository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10);
    // const users = await userRepo.getAll();
    // // const users  = await userRepo.create({
    // //     email : 'hemantrawat812@gmail.com',
    // //     Password : '1242345',
    // //     name : 'Hemant'
    // // })
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id);
})