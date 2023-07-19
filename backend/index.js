import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./Routes/UserRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(UserRoutes);

mongoose.connect(process.env.DB_URL).then(console.log("DB Connected !"));

app.listen(process.env.PORT, () => {
  console.log(`Backend Port: ${process.env.PORT}`);
});
