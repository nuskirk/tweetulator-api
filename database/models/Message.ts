import mongoose from 'mongoose';
import IMessage from './interfaces/IMessage';

const NUMBER_OPERATOR_AND_REGEX = /^[\+|\-|\*|\/]\d+$/;
const NUMBER_REGEX = /^\d+$/;

const messageSchema = new mongoose.Schema<IMessage>(
  {
    parentId: {
      index: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
    text: {
      type: String,
      required: true,
      validate: {
        validator(inputValue: string) {
          if (this.parentId) {
            return NUMBER_OPERATOR_AND_REGEX.test(inputValue);
          }
          return NUMBER_REGEX.test(inputValue);
        }
      }
    },
    writer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Message', messageSchema, 'messages');
