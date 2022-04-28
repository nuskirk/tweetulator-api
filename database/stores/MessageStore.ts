import Message from '../models/Message';
import IMessage from '../models/interfaces/IMessage';
import IMessageStore from './interfaces/IMessageStore';

export default class MessageStore implements IMessageStore {
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

  async create(payloadMessage: IMessage) {
    const newMessage = new Message(payloadMessage);
    return await newMessage.save();
  };
}
