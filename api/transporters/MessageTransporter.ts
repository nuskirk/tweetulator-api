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
      console.error(error)
      return errorResponse(res, error);
    }
  }
}
