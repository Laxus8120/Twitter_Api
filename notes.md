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
2. we did the basic implementation of passport strategy. // ./config/jwt-middleware
3. now, to run this passport we need to run some middleware which we gonna do in our main index.js file.

`app.use(passport.initialize());`

***what is passport strategy ?

it is a way in which you going to authenticate ,here  we going to authenticate using JWT , how to extract data from jwt 



today doubts 

1. whta is schema.method ?


## working on Aws S3

* how we can handle this aws s3 inside our nodejs, express API, so we already have a bunch of packages.
* the first package we explore is AWS-SDK is npm package which has all the code which is require to connect to amazon web services     directly. so, what ever services we wanna use we configure it.
* second package is multer - multer is a nodejs middlware which primarly used for uploading file.
* the third one is multer-s3 - this is sub package for multer which focus on s3-service only.

### Setting up S3 

- there is a concept of bucket, so we are gonna create a new bucket.
    * name your bucket, and most of field recommanded.
    * `block public Access field` - by deffault it is enable which not let others to access the bucket, so in this field we gonna enable this field.
    * that's all we need to setup this one :(), most of filed we let default.
    * we can also manualy upload something on s3.

- Now, we have our basic bucket ready with us now we need some aws keys, access and everything.
    * go to security credential, in order to access S3 we need access keys so we gonna create one --> go to `create access key`--> save those 2 keys somewhere safe that we are gonna use it later.

### Setting up the project now,

* creating a new configuration for file upload, 
    - import multer and multerS3, awsS3.
    - setting up awsS3 object by passing some credential.
    ```js
    aws.config.update({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID
    });
    const s3 = new aws.S3(); // this s3 is required.
    ```
    - Now, setting up multer.
    ```js
    const upload = multer({ 
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
    });
    ```
    - the first field multer required is storage--> how you want multer to store the images here we want multer to handle the storage using multer-s3.
    - now, the multer s3 take and object like `s3` which tells how you gonna connect to s3 here we use our `aws s3` object.
    - second, it required the bucket name which we named when creating our new bucket in aws s3.
    - third, `acl` is permission which we are giving is `public-read` here.
    - fourth, it take the meta data which take a req,file, and a callback.