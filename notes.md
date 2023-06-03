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

# Like and comments working 

## how can we prepare a like model using which you can like on a comment and tweet also.

### Creating a new LIke model

? In which model we are going to like for e.x are we gonna like on a comment or tweet ?
* SO, we can keep a property `onModel`.

* Try to learn the ref path documentation in moongose.
```js
const likeSchema = new mongoose.Schema({
    onModel : {
        type : String,
        required : true,
        enum : ['Tweet','Comment']
    },
    likeable : {
        type: mongoose.Schema.Types.ObjectId,
        required :true,
        refPath : 'onModel'
    }

},{timestamps : true});

```