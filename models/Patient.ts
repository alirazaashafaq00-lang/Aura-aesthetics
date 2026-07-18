import { Schema, model, models, Types } from "mongoose";

const PatientSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    dateOfBirth: Date,
    skinProfile: {
      skinType: String,
      concerns: [String],
      lastAnalyzedAt: Date,
    },
    treatmentHistory: [
      {
        treatment: { type: Types.ObjectId, ref: "Treatment" },
        date: Date,
        notes: String,
        beforeImageUrl: String,
        afterImageUrl: String,
      },
    ],
    notes: String,
  },
  { timestamps: true }
);

export default models.Patient || model("Patient", PatientSchema);
