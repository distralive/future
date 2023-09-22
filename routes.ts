import { Hono } from "hono";

const router = new Hono();

// Health check
router.get("/health", (c) => {
  return c.json({ message: "API is healthy" });
});

// Authentication
router.post("/auth/sign-up", async (c) => {
  const body = await c.req.json();

  return c.json({ message: "User successfully created", body });
});

router.post("/auth/sign-in", async (c) => {
  const body = await c.req.json();

  return c.json({ message: "User successfully logged in", body });
});

router.get("/auth/sign-out");

export default router;
