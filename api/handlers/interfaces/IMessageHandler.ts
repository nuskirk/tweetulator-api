import IMessage from '../../../database/models/interfaces/IMessage';

export default interface IMessageHandler {
  list(): Promise<IMessage[]>;
}
