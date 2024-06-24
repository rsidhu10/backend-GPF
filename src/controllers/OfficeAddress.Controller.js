import { OfficeAddress } from "../models/officeaddress.model.js";
import { ApiError } from "../utilities/ApiError.utility.js";
import { ApiResponse } from "../utilities/ApiResponse.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";

const addOfficeLink = asyncHandler(async (req, res) => {
  try {
    const { office, address } = req.body;
    console.log(req.body);
    if (!office || !address) {
      throw new ApiError(400, "All fields are required");
    }
    const existedLink = await OfficeAddress.findOne({
      $and: [{ office }, { address }],
    });

    if (existedLink) {
      throw new ApiError(400, "Relation already existed");
    } else {
      const newLink = await OfficeAddress.create({
        office,
        address,
      });
      if (newLink) {
        res
          .status(200)
          .json(new ApiResponse(200, newLink, "Data Saved Successfully"));
      } else {
        throw new ApiError(500, "Failed to save data");
      }
    }
  } catch (error) {
    throw new ApiError(
      500,
      error.message || "Failed to create Office and Address relation"
    );
  }
});

export { addOfficeLink };
