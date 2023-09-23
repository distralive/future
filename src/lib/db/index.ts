import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const DATABASE_URL = Bun.env.DATABASE_URL ?? "";

const client = new Client({
  connectionString: DATABASE_URL,
});

await client.connect();
export const db = drizzle(client);
