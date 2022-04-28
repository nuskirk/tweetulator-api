import IMessage from '../../database/models/interfaces/IMessage';
import IMessageStore from '../../database/stores/interfaces/IMessageStore';
import MessageStore from '../../database/stores/MessageStore';
import IMessageHandler from './interfaces/IMessageHandler';

export default class MessageHandler implements IMessageHandler {
  private messageStore: IMessageStore;

  constructor() {
    this.messageStore = new MessageStore();
  }

  async list(): Promise<IMessage[]> {
    try {
      return await this.messageStore.list();
    } catch (error) {
      throw error;
    }
  }

  async create(payloadMessage: IMessage): Promise<IMessage> {
    try {
      return await this.messageStore.create(payloadMessage);
    } catch (error) {
      throw error;
    }
  }
}
