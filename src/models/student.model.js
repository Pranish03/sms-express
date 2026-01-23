import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    semester: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

export const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
