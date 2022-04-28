import { Request, Response } from 'express';
import { successResponse, errorResponse } from './Responses';

export default class UserTransporter {
  async all (_req: Request, res: Response) {
    try {
      return successResponse(res, {});
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}
