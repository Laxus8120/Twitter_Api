const hashtag  = require('../models/hashtag.js');

class HashtagRepository {

    async create(data){

        try {
            const tweet = await hashtag.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkcreate(data){

        try {
            const tags = await hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(tittleList){
        try {
            const tags = await hashtag.find({
                title : tittleList
            })
            return tags;
            
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

    async get(id){

        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){

        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;