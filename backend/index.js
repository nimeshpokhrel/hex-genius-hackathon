import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./Routes/UserRoutes.js";
import WorkerRoutes from "./Routes/WorkerRoutes.js";
import WorkRoutes from "./Routes/WorkRoutes.js";
import KhaltiRoutes from "./Routes/KhaltiRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(UserRoutes);

app.use(WorkerRoutes);

app.use(WorkRoutes);

app.use(KhaltiRoutes)

mongoose.connect(process.env.DB_URL).then(console.log("DB Connected !"));

app.listen(process.env.PORT, () => {
  console.log(`Backend Port: ${process.env.PORT}`);
});
