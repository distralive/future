import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const DATABASE_URL = Bun.env.DATABASE_URL ?? "";

const sql = postgres(DATABASE_URL);
export const db: PostgresJsDatabase = drizzle(sql);
