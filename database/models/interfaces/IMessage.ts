import { Types } from 'mongoose';

export default interface IMessage {
  parentId: Types.ObjectId;
  text: string;
  writer: string;
}
