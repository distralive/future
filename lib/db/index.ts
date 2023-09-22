import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const DATABASE_URL = Bun.env.DATABASE_URL ?? "";

// for migrations
const migrationClient = postgres(DATABASE_URL, { max: 1 });
await migrate(drizzle(migrationClient), {
  migrationsFolder: "drizzle",
});

// for query purposes
const queryClient = postgres(DATABASE_URL);
export const db: PostgresJsDatabase = drizzle(queryClient);
