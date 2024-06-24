import { ApiResponse } from "../utilities/ApiResponse.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { ApiError } from "../utilities/ApiError.utility.js";

import { Office } from "../models/office.model.js";

const addOffice = asyncHandler(async (req, res) => {
  try {
    const { serial, englishOfficeName, punjabiOfficeName } = req.body;
    console.log(serial, englishOfficeName, punjabiOfficeName);

    if (!serial && !englishOfficeName && !punjabiOfficeName) {
      throw new ApiError(400, "All fields are required");
    }

    const existedOffice = await Office.findOne({
      $or: [{ englishOfficeName }, { punjabiOfficeName }],
    });
    console.log(existedOffice);

    if (existedOffice) {
      console.log(" in the function");
      throw new ApiError(409, "Record Already exists");
    }

    const office = await Office.create({
      serial,
      englishOfficeName,
      punjabiOfficeName,
    });
    const createdOffice = await Office.findById(office._id);
    if (!createdOffice) {
      throw new ApiError(500, "Failed to create office");
    }

    res
      .status(201)
      .json(new ApiResponse(201, createdOffice, "Data Saved Successfully"));
  } catch (error) {
    throw new ApiError(
      400,
      error.message || "Error occured during saving record"
    );
  }
});

const getOffices = asyncHandler(async (req, res) => {
  console.log("Received Get Request");
  try {
    const data = await Office.find();
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

export { addOffice, getOffices };
