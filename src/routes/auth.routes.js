import express from "express";
import { signup, login, getMe } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const authRouter = express.Router();

authRouter.get("/api/me", verifyToken, getMe);
authRouter.post("/api/signup", signup);
authRouter.post("/api/login", login);

export default authRouter;
