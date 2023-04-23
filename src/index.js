import express from 'express';
import {connect} from './config/database.js'
const app = express();

import TweetService from './Services/Tweet-Service.js';

app.listen(3000,async()=>{

    console.log(`Server started`);
    await connect();
    console.log('mongo server connected');
    const ser = new TweetService();
    await ser.create({
     content : "Done with #refactor"
    })
})