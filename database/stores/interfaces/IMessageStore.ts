import IMessage from '../../models/interfaces/IMessage';

export default interface IMessageStore {
  create(payloadMessage: IMessage): Promise<IMessage>;
  list(): Promise<IMessage[]>;
}
