import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export = async function mongo(): Promise<void> {
  mongoose.connection.on("connected", () => console.log("connected"));
  mongoose.connection.on("error", (err: Error) => {
    console.log(`MongoDB connection error: ${err}`);
  });
  console.log(process.env.MONGODB_URI);
  await mongoose.connect(process.env.MONGODB_URI || "", {});
};
