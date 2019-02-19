import MongoMemoryServer from "mongodb-memory-server";
import * as mongoose from "mongoose";

(mongoose as any).Promise = global.Promise;

const run = async () => {
  if (process.env.NODE_ENV === "testing") {
    const mongod = new MongoMemoryServer();
    const mongoConnString = await mongod.getConnectionString();
    mongoose.connect(mongoConnString, {
      useMongoClient: true
    });
  } else {
    mongoose.connect("mongodb://127.0.0.1:27017/typescript_mongoose", {
      useMongoClient: true
    });
  }
};
run();

export { mongoose };
