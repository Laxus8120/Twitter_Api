const { TweetRepository, HashRepository } = require('../Repository/index');

class TweetService {

    constructor(){
        this.tweetRepository   = new TweetRepository();
        this.hashRepository = new HashRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substring(1));
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
}

module.exports = TweetService;