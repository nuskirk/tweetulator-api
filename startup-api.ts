import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Database from './database';
import cors from 'cors';

dotenv.config();

const api = express();
const PORT = process.env.PORT || 3000;

import routes from './api/routes';
const { routerV1 } = routes;

api.use(cors())
api.use(bodyParser.urlencoded({
  extended: true
}))
api.use(bodyParser.json())

api.use('/api', [routerV1]);

Database.connect();

api.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  /* tslint:disable-next-line */
  console.log('Error', err);
  return res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

api.listen(PORT, () => {
  /* tslint:disable-next-line */
  console.log("⚡️[API]: API server is running");
});

export =  api;
