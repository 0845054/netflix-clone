import { login, signup, test } from "../controllers/auth.controller.js";

import express from "express";
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/test", test);

export default router;
