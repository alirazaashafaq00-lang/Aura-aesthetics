import { Schema, model, models, Types } from "mongoose";

const AppointmentSchema = new Schema(
  {
    patient: { type: Types.ObjectId, ref: "Patient" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    treatment: { type: Types.ObjectId, ref: "Treatment" },
    doctor: String,
    startTime: { type: Date, required: true },
    endTime: Date,
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
    isVirtual: { type: Boolean, default: false },
    notes: String,
  },
  { timestamps: true }
);

export default models.Appointment || model("Appointment", AppointmentSchema);
