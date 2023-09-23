import type { Config } from "drizzle-kit";

export default {
  out: "./src/lib/db/drizzle",
  schema: "./src/lib/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: Bun.env.DATABASE_URL ?? "",
  },
} satisfies Config;
