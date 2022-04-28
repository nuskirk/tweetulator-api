import IUser from '../../models/interfaces/IUser';

export default interface IUserStore {
  all(): Promise<IUser[]>;
}
