import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["patient", "staff", "admin"], default: "patient" },
    phone: String,
    avatarUrl: String,
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
