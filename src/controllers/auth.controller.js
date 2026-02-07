import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist)
      return res.status(400).json({ message: "User already exist" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });
    generateTokenAndSetCookie(res, user._id);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist)
      return res.status(404).json({
        message: "Invalid credentials",
      });
    const matchPassword = await bcrypt.compare(password, userExist.password);
    if (!matchPassword)
      return res.status(400).json({ message: "Invalid credentials" });
    generateTokenAndSetCookie(res, userExist._id);
    res.status(200).json({
      message: "Welcome!",
      user: {
        id: userExist._id,
        name: userExist.name,
        email: userExist.email,
        role: userExist.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json({ user });
};
