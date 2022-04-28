import Message from '../models/Message';
import IMessage from '../models/interfaces/IMessage';
import IMessageStore from './interfaces/IMessageStore';

export default class MessageStore implements IMessageStore {
  async create(payloadMessage: IMessage) {
    return await Message.create(payloadMessage);
  };

  async list() {
    return await Message.aggregate([
      {
        $match: {
          parentId: undefined,
        }
      },
      {
        $graphLookup: {
          as: 'reps',
          from: 'messages',
          connectFromField: '_id',
          connectToField: 'parentId',
          startWith: '$_id',
        }
      }
    ])
  };
}
