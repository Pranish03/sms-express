import express from "express";
import { signup, login } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/api/signup", signup);
authRouter.post("/api/login", login);

export default authRouter;
