import express from 'express';
import UserTransporter from '../transporters/UserTransporter';
const routerV1 = express.Router();
const versionPath = '/v1';

const userTransporter = new UserTransporter();
const userRouter = routerV1.route(`${versionPath}/users`);
userRouter.all(userTransporter.all);

export default routerV1;
