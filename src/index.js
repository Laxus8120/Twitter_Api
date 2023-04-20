const express = require('express');
const connect   = require('./config/database')
const app = express();
const TweetRepository  = require('./Repository/Tweet-Repository');
const Tweet = require('./models/tweet');

app.listen(3000,async()=>{

    console.log(`Server started`);
    await connect();
    console.log('mongo server connected');

    const TweetRepo  = new TweetRepository();

    // const tweet  = await TweetRepo.get('643b43125a892985db081bfe');
    const tweet = await TweetRepo.get('643fa7c6b2c6cb6a5e781771');
    console.log(tweet);
    // tweet.comments.push({content : ' 2nd new Comment'});
    // await tweet.save();
    // console.log(tweet);
})