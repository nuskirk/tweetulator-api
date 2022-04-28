import IUser from '../models/interfaces/IUser';
import IUserStore from './interfaces/IUserStore';

class UserStore implements IUserStore {
  all(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
}

export default UserStore;
