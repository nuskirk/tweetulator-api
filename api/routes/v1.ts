import express from 'express';
import MessageTransporter from '../transporters/MessageTransporter';
const routerV1 = express.Router();
const versionPath = '/v1';

const messageTransporter = new MessageTransporter();
const messageRouter = routerV1.route(`${versionPath}/messages`);
messageRouter.all(messageTransporter.list);

export default routerV1;
