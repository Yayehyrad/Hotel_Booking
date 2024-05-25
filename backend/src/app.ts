import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user/user.route";
import authRouter from "./routes/auth/auth.route";
import myHotelRouter from "./routes/hotel/myHotel.route";
import dotenv from "dotenv";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/my-hotels", myHotelRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

export = app;
