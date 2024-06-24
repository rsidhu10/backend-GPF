import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema(
  {
    englishAddress: { type: String },
    punjabiAddress: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Address = mongoose.model("Address", addressSchema);
