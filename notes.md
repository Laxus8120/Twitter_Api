# TWITTER ROADMAP NOTES OF THIS PROJECT 


### HASTAG SCHEMA 
```javascript
const mongoose  = require('mongoose');


const hashtag  = new mongoose.Schema({

    title: {
        type: String,
        required: true
    }
},{timestamps:true});
```
* apart from that we also need all those tweet belonging to this hastag, what we can do that we store the tweet id in your hashtag.
* THere are multiple tweets belonging to a hashtag.
* And one hashtag have multiple tweets.
* so we setting up a tweets array in hastag schema.

```js
tweets:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweets'
        }
    ]
```
* From hastag we will able to get all the tweets.