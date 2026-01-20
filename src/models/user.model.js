import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // User schema
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
