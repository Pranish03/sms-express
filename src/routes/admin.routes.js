import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  createStudent,
  deleteStudent,
  editStudent,
  getAllStudents,
  getStudent,
} from "../controllers/manageStudent.controller.js";

const adminRouter = Router();

adminRouter.get("/api/students", verifyToken, isAdmin, getAllStudents);
adminRouter.get("/api/student", verifyToken, isAdmin, getStudent);
adminRouter.post("/api/student", verifyToken, isAdmin, createStudent);
adminRouter.put("/api/student", verifyToken, isAdmin, editStudent);
adminRouter.delete("/api/student", verifyToken, isAdmin, deleteStudent);

export default adminRouter;
