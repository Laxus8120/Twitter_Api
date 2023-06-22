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
* Now, we know a user can like something and if he want he can dislike the tweet he liked already so, lets start working on that .
```js
User : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    }
```

>NOTE : when we update something if you wanna show the new updated document  value try to add the field -  
`const result = await this.model.findByIdAndUpdate(id, data, {new: true});` // {new:true} is must.

* Working on toggleLike function which let like or unlike the comment or tweet we already liked.


//Note- By using the `populate` method, you can efficiently retrieve related data from other collections in MongoDB, avoiding the need for separate queries and enhancing the functionality and readability of your code.

# Adding Comment Model 

```js
User : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    onModel : {
        type : String,
        required : true,
        enum : ['Tweet','Comment']
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required :true,
        refPath : 'onModel'
    }
```
* adding some new fields which tells the user , or the comment made on a tweet or on a comment .
```js
likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ]
```
* Adding this filed which store how many like a commnet has so that we dont have quey the like model we can count from commnet model only.

## Adding passport AUth

1. npm i passport-jwt
2. 