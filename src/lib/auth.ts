import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { getDatabase, getMongoClient } from "@/lib/mongodb";

const db = getDatabase();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: getMongoClient(),
  }),
  emailAndPassword: {
    enabled: true,
  },
});
