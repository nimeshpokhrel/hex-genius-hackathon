import express from "express";
import {
  DelUserWork,
  GetAllUserWork,
  GetWorkFromCategory,
  EditUserWork
} from "../Controllers/WorkController.js";
import { CheckAccess } from "../Controllers/AuthController.js";

const router = express.Router();

router.get("/getworkscategory", GetWorkFromCategory);

router.get("/getuserworks", CheckAccess, GetAllUserWork);

router.delete("/deletework/:id", CheckAccess, DelUserWork);

router.patch("/editwork/:id", CheckAccess, EditUserWork);

export default router;
