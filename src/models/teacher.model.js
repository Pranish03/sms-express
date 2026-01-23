const teacherSchema = new mongoose.Schema({
  department: String,
  designation: String,
  user: 
  { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, 
{ timestamps: true });

export default mongoose.model("Teacher", teacherSchema);
