import mongoose from "mongoose";
const DB_NAME = process.env.DB_NAME;
const DB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected DB HOST : ${connectionInstance}`);
  } catch (error) {
    console.log("MONGODB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
