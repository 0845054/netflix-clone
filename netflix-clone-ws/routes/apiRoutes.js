import { verify, logout } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/authMiddleware.js";

import express from "express";
const router = express.Router();

router.get("/", authenticate, (req, res) => {
  res.json({ message: "Hello, World! From route" });
});

router.get("/verify", authenticate, verify);
router.post("/logout", authenticate, logout);

export default router;
