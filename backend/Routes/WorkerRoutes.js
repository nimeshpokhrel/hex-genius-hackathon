import express from "express";
import {
  WorkerLoginHandler,
  WorkerSignupHandler,
} from "../Controllers/WorkerController.js";

const router = express.Router();

router.post("/worker/signup", WorkerSignupHandler);

router.post("/worker/login", WorkerLoginHandler);

export default router;
