import { Router } from "express";

import { addOffice, getOffices } from "../controllers/Office.Controller.js";

const router = Router();
router.route("/").post(addOffice);
router.route("/").get(getOffices);

export default router;
