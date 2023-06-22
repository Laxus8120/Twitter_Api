import User from '../models/user.js';
import CrudRepository from './crudRepository.js';

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }
}

export default UserRepository;