import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
const port = process.env.PORT || 6081;
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });
