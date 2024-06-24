import { Router } from "express";

import { addAddress, getAddress } from "../controllers/Address.Controller.js";

const router = Router();
router.route("/").post(addAddress);
router.route("/").get(getAddress);

export default router;
