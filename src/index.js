import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.config.js";
import adminRouter from "./routes/admin.routes.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use(authRouter);
app.use(adminRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port ${PORT}`);
});
