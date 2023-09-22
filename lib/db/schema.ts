import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { nanoid } from "nanoid";
import { ulid } from "ulid";

export const users = pgTable("users", {
  id: varchar("id")
    .$defaultFn(() => ulid())
    .primaryKey(),
  username: varchar("username", { length: 64 }).unique().notNull(),
  email: varchar("email").unique().notNull(),
  password: varchar("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
}));

export const sessions = pgTable("sessions", {
  id: varchar("id")
    .$defaultFn(() => nanoid(64))
    .primaryKey(),
  createdAt: timestamp("created_at").defaultNow(),
  expiredAt: timestamp("expired_at").$defaultFn(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  }),
  updatedAt: timestamp("updated_at").defaultNow(),
  userId: varchar("user_id"),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  author: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
