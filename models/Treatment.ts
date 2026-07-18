import { Schema, model, models } from "mongoose";

const TreatmentSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    shortDescription: String,
    description: String,
    priceFrom: { type: Number, required: true },
    durationMinutes: Number,
    downtime: String,
    imageUrl: String,
    featured: { type: Boolean, default: false },
    beforeAfterImages: [{ before: String, after: String }],
  },
  { timestamps: true }
);

export default models.Treatment || model("Treatment", TreatmentSchema);
