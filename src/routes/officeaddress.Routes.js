import { Router } from "express";
import { addOfficeLink } from "../controllers/OfficeAddress.Controller.js";

const router = Router();

const test = (req, res) => {
  res.send("From Router", req.body);
};
router.route("/").post(addOfficeLink);
// router.route("/").post((req, res) => {
//   res.send(req.body);
// });

export default router;
