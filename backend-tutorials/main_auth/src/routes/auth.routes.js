import { Router } from "express";
import { getMe, register } from "../controllers/auth.controller.js";

const authRouter = Router();

/**
 * POST /api/auth/register
 */
authRouter.post("/register", register);

/**
 * Get /api/auth/get-me
 */
authRouter.get("/get-me", getMe);

export default authRouter;
