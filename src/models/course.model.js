import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: String,
  semester: Number,
  department: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
