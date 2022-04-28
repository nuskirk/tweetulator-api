import { Request, Response } from 'express';

export default interface IMessageTransporter {
  list(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
  create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
