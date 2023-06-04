import User from '../models/user.js';
import CrudRepository from './crudRepository.js';

class UserRespository extends CrudRepository {
    constructor() {
        super(User);
    }

}

export default UserRespository;