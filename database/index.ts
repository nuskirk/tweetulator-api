import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default class Database {
  static connect() {
    return mongoose.connect(process.env.MONGO_URL, {
      user: process.env.MONGO_USERNAME,
      pass: process.env.MONGO_PASSWORD,
      dbName: process.env.MONGO_DATABASE,
    });
  }
}
