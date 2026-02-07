import { Student } from "../models/student.model.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate("user", "-password")
      .sort({ createdAt: -1 });

    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate(
      "user",
      "-password",
    );

    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, email, department, semester, rollNo } = req.body;

    if (!name || !email || !department || !semester || !rollNo) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const existingRoll = await Student.findOne({ rollNo });
    if (existingRoll)
      return res.status(400).json({ message: "Roll number already exists" });

    const DEFAULT_PASSWORD = process.env.DEFAULT_STUDENT_PASSWORD || "sms123";

    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "student",
    });

    const student = await Student.create({
      department,
      semester,
      rollNo,
      user: user._id,
    });

    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const editStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({
      message: "Student updated successfully",
      updated,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) return res.status(404).json({ message: "Student not found" });

    await User.findByIdAndDelete(student.user);
    await student.deleteOne();

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
