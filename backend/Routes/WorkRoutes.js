import express from "express";
import {
  DelUserWork,
  GetAllUserWork,
  GetWorkFromCategory,
  EditUserWork,
  AddUserWork,
  ListWorkRequests,
  AcceptRequest,
  RejectRequest,
} from "../Controllers/WorkController.js";
import { CheckAccess } from "../Controllers/AuthController.js";

const router = express.Router();

router.get("/getworkscategory", GetWorkFromCategory);

router.get("/getuserworks", CheckAccess, GetAllUserWork);

router.delete("/deletework/:id", CheckAccess, DelUserWork);

router.patch("/editwork/:id", CheckAccess, EditUserWork);

router.post("/addwork", CheckAccess, AddUserWork);

router.get("/getworkrequests", CheckAccess, ListWorkRequests);

router.post("/acceptrequest", CheckAccess, AcceptRequest);

router.post("/rejectrequest", CheckAccess, RejectRequest);

export default router;
