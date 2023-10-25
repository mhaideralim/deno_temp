import { MongoClient } from "../deps.ts";
const dbUri = Deno.env.get("LOCAL_LINK");
const dbName = Deno.env.get("MONGO_INITDB_DATABASE");
const client = new MongoClient();
console.log(dbUri);
export async function connectToDatabase() {
  if (!dbUri) {
    console.error(
      "MongoDB connection string not found in environment variables."
    );
    Deno.exit(1);
  }
  try {
    await client.connect(dbUri);
    console.log("Deno-Mongo connected to the database");
  } catch (error) {
    console.error("Deno-Mongo connection error:", error);
  }
}

export const db = client.database(dbName);
