import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/api/students");

export default adminRouter;
