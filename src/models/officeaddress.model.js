import mongoose, { Schema } from "mongoose";
import { Office } from "./office.model.js";
import { Address } from "./address.model.js";

const officeAddressSchema = new Schema(
  {
    office: {
      type: Schema.Types.ObjectId,
      ref: "Office",
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OfficeAddress = mongoose.model(
  "OfficeAddress",
  officeAddressSchema
);
