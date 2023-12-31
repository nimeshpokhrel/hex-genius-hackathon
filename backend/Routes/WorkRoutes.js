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
  RequestCompleted,
  HireWorker,
  ListSentInvite,
  CancelInviteHandler,
} from "../Controllers/WorkController.js";
import { CheckAccess } from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/getworkscategory", GetWorkFromCategory);

router.post("/hireworker", CheckAccess, HireWorker);

router.get("/listsentinvite", CheckAccess, ListSentInvite);

router.get("/getuserworks", CheckAccess, GetAllUserWork);

router.delete("/deletework/:id", CheckAccess, DelUserWork);

router.patch("/editwork/:id", CheckAccess, EditUserWork);

router.post("/addwork", CheckAccess, AddUserWork);

router.get("/getworkrequests", CheckAccess, ListWorkRequests);

router.post("/acceptrequest", CheckAccess, AcceptRequest);

router.post("/rejectrequest", CheckAccess, RejectRequest);

router.post("/requestcompleted", CheckAccess, RequestCompleted);

router.post("/cancel-invite", CheckAccess, CancelInviteHandler);

export default router;
