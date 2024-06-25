import mongoose, { Schema } from "mongoose";

const designationSchema = new Schema(
  {
    englishDesignation: {
      type: String,
      required: true,
    },
    englishDesignation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Designation = mongoose.model("Designation", designationSchema);
