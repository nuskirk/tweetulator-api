import IMessage from '../../models/interfaces/IMessage';

export default interface IMessageStore {
  list(): Promise<IMessage[]>;
  create(message: IMessage): Promise<IMessage>;
}
