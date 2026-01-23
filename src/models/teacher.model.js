import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

export const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);
