import mongoose, { Schema } from "mongoose";

const OfficeSchema = new Schema(
  {
    serial: {
      type: Number,
      require: true,
      unique: true,
    },
    englishOfficeName: {
      type: String,
    },
    punjabiOfficeName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Office = mongoose.model("Office", OfficeSchema);
