import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page ");
});
// app.post("/api/v1/officeaddress", (req, res) => {
//   res.send("Path Ok");
// });

const test = (req, res) => {
  const data = req.body;
  res.status(200).json("From App");
};

import officeRouter from "./src/routes/office.Routes.js";
import addressRouter from "./src/routes/address.Routes.js";
import officeAddressRouter from "./src/routes/officeaddress.Routes.js";

app.use("/api/v1/offices", officeRouter);
app.use("/api/v1/addresses", addressRouter);
app.use("/api/v1/officeaddress", officeAddressRouter);
export { app };
