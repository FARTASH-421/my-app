// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   userName: { type: String },
//   userEmail: { type: String, required: true },
//   userPassword: { type: String },
//   time: { type: String },
// });

// //  Fix model hot-reloading in Next.js
// export default mongoose.models.User || mongoose.model("User", userSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide a username"],
    maxlength: [30, "Username cannot be more than 30 characters"],
  },
  userEmail: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  userPassword: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  phone: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
    maxlength: [500, "Bio cannot be more than 500 characters"],
  },
  occupation: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  twitter: {
    type: String,
    default: "",
  },
  instagram: {
    type: String,
    default: "",
  },
  profileImage: {
    type: String,
    default: "../default-avatar.png",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
