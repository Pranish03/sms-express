import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  department: String,
  semester: Number,
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  }
}, 
{ timestamps: true });

export default mongoose.model("Student", studentSchema);
