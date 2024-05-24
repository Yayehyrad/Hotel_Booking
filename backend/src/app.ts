import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user/user.route";
import authRouter from "./routes/auth/auth.route";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

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

export = app;
