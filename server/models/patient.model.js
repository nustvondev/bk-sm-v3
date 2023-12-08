import mongoose, { Schema } from "mongoose";

const PatientSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    metaId: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    tshUpdateInfo: [String],
    tshRecord: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Patient", PatientSchema);
