import express from "express";
import { KhaltiHandler } from "../Controllers/KhaltiController.js";

const router = express.Router();

router.post("/add-balance", KhaltiHandler);

router.get("/verify-transaction", KhaltiHandler);

export default router;
