import type { Config } from "drizzle-kit";

export default {
  out: "./lib/db/drizzle",
  schema: "./lib/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: Bun.env.DATABASE_URL ?? "",
  },
} satisfies Config;
