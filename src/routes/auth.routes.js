import express from "express";
import {
  signup,
  login,
  getMe,
  logout,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const authRouter = express.Router();

authRouter.get("/api/me", verifyToken, getMe);
authRouter.post("/api/signup", signup);
authRouter.post("/api/login", login);
authRouter.post("/api/logout", logout);

export default authRouter;
