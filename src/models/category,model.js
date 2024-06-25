import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    englishCategoryName: {
      type: String,
      required: true,
      unique: true,
    },
    punjabiCategoryName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model("Cateogry", categorySchema);
