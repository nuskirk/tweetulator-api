import { Request, Response } from 'express';
import IMessageTransporter from './interfaces/IMessageTransporter';
import { successResponse, errorResponse } from './Responses';
import MessageHandler from '../handlers/MessageHandler';

export default class MessageTransporter implements IMessageTransporter {
  async list (_req: Request, res: Response) {
    try {
      const messageHandler = new MessageHandler();
      const messages = await messageHandler.list();

      return successResponse(res, messages);
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  async create (req: Request, res: Response) {
    try {
      const { text, writer, parentId } = req.body;

      const messageHandler = new MessageHandler();
      const newMessage = await messageHandler.create({ text, writer, parentId });

      return successResponse(res, newMessage);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}
