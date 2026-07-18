import { Schema, model, models, Types } from "mongoose";

const ReviewSchema = new Schema(
  {
    patient: { type: Types.ObjectId, ref: "Patient" },
    authorName: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    text: { type: String, required: true },
    treatment: { type: Types.ObjectId, ref: "Treatment" },
    videoUrl: String,
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.Review || model("Review", ReviewSchema);
