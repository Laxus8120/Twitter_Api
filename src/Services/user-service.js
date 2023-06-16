import { UserRepository } from "../Repository/index.js";

class UserService {
    constructor(){
        this.userRepository  = new UserRepository();
    }

    async signup(data){
        try {
             const user =  await this.userRepository.create(data); 
             return user;
        } catch (error) {
            console.log('not able to signup');
            throw error;
        }
    }
}

 export default UserService;
