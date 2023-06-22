import { TweetRepository, HashtagRepository } from '../Repository/index.js'

class TweetService {

    constructor(){
        this.tweetRepository   = new TweetRepository();
        this.hashRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;        
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase());
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashRepository.findByName(tags);
        let titileOfPresentTag = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter( tag => !titileOfPresentTag.includes(tag));
        newTags = newTags.map( tag => {
            return {
                title : tag,
                tweets : [tweet.id]
            }
        });
         await this.hashRepository.bulkcreate(newTags);
         alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id),
            tag.save()
         });
        return tweet; 
        // todo : create hastag and add here 
        /**
         * bulkcreate in mongoose 
         * filter titile of hashtag based on multiple tags 
         * how to add tweet id inside all the hashtags 
         */
    }

    async get(tweetId){
        const tweet =  await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

export default TweetService;