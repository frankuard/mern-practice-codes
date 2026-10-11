import { Router } from "express";
import { getMe, logout, logoutAll, refreshToken, register } from "../controllers/auth.controller.js";

const authRouter = Router();

/**
 * POST /api/auth/register
 */
authRouter.post("/register", register);

/**
 * Get /api/auth/get-me
 */
authRouter.get("/get-me", getMe);

/**
 * Get api/auth/refresh-token
 */

authRouter.get("/refresh-token",refreshToken);

/**
 * GET /api/auth/logout
 */

authRouter.get("/logout", logout);

/**
 * GET /api/auth/logout-all
 */

authRouter.get("/logout-all",logoutAll);


export default authRouter;
