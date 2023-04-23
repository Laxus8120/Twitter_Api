import Hashtag from '../models/hashtag.js'

class HashtagRepository {

    async create(data){

        try {
            const tweet = await Hashtag.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkcreate(data){

        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(tittleList){
        try {
            const tags = await Hashtag.find({
                title : tittleList
            })
            return tags;
            
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId,data){

        try {
            const tweet = await Hashtag.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){

        try {
            const tweet = await Hashtag.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){

        try {
            const tweet = await Hashtag.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default HashtagRepository;