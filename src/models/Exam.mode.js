import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examType: {
    type: String,
    required: true, // Midterm, Final, Quiz, etc.
  },
  examDate: {
    type: Date,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }
}, { timestamps: true });

export default mongoose.model("Exam", examSchema);
