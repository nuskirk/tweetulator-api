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
      const messages = await this.messageStore.list();
      return messages;
    } catch (error) {
      throw error;
    }
  }
}
