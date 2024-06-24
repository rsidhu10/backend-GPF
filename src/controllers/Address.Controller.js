import { ApiResponse } from "../utilities/ApiResponse.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { ApiError } from "../utilities/ApiError.utility.js";

import { Address } from "../models/address.model.js";

const addAddress = asyncHandler(async (req, res) => {
  console.log(req.body);

  try {
    const { englishAddress, punjabiAddress } = req.body;
    if (!englishAddress && !punjabiAddress) {
      throw new ApiError(400, "Please provide address details");
    }
    const existedAddress = await Address.findOne({
      $or: [{ englishAddress }, { punjabiAddress }],
    });

    if (existedAddress) {
      throw new ApiError(400, "Record already exists");
    } else {
      const address = await Address.create({
        englishAddress,
        punjabiAddress,
      });
      res.status(200).json(new ApiResponse(200, address, "data feteched "));
    }
  } catch (error) {
    throw new ApiError(400, error.message || "Failed to create Address");
  }
});

const getAddress = asyncHandler(async (req, res) => {
  console.log("Received Get Request");
  try {
    const data = await Address.find();
    if (!data) {
      throw new ApiError(404, "No Data Found");
    }
    res
      .status(200)
      .json(new ApiResponse(200, data, "Data Retrieved Successfully"));
  } catch (error) {
    throw new ApiError(400, error.message || "Error ");
  }
});

export { addAddress, getAddress };
