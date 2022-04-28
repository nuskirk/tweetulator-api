import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Database from './database';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

import routes from './api/routes';
const { routerV1 } = routes;

server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(bodyParser.json())

server.use('/api', [routerV1]);

Database.connect();

server.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  /* tslint:disable-next-line */
  console.log('Error', err);
  return res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

server.listen(PORT, () => {
  /* tslint:disable-next-line */
  console.log("⚡️[server]: Server is running");
});

export default server;
