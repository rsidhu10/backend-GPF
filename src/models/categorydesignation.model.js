import mongoose, { Schema } from "mongoose";

const categorydesignationSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    designationId: {
      type: Schema.Types.ObjectId,
      ref: "Designation",
    },
  },
  {
    timestamps: true,
  }
);

export const Categorydesignation = mongoose.model(
  "Categorydesignation",
  categorydesignationSchema
);
