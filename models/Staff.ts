import { Schema, model, models } from "mongoose";

const StaffSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: String,
    imageUrl: String,
  },
  { timestamps: true }
);

export default models.Staff || model("Staff", StaffSchema);
