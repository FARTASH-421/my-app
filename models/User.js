import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String },
  userEmail: { type: String, required: true },
  userPassword: { type: String },
  time: { type: String },
});

// ✅ Fix model hot-reloading in Next.js
export default mongoose.models.User || mongoose.model("User", userSchema);
