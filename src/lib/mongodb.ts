import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  __helpEventsMongoClient?: MongoClient;
};

export function getMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!globalForMongo.__helpEventsMongoClient) {
    globalForMongo.__helpEventsMongoClient = new MongoClient(uri);
  }

  return globalForMongo.__helpEventsMongoClient;
}

export function getDatabase() {
  return getMongoClient().db("help-events");
}
