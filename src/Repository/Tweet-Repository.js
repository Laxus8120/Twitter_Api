import Tweet from '../models/tweet.js'
import CrudRepository from './crudRepository.js';

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }
    
    async create(data){

        try {
            console.log(data)
            const tweet = await Tweet.create(data);
            console.log(tweet)
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId,data){

        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}

export default TweetRepository;