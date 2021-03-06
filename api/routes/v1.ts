import express from 'express';
import MessageTransporter from '../transporters/MessageTransporter';
const routerV1 = express.Router();
const versionPath = '/v1';

const messageTransporter = new MessageTransporter();
const messageRouter = routerV1.route(`${versionPath}/messages`);
messageRouter.get(messageTransporter.list);
messageRouter.post(messageTransporter.create);

export default routerV1;
