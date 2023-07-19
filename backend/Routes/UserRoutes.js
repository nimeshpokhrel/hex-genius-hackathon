import express from "express";
import {
  ClientLoginHandler,
  ClientSignupHandler,
} from "../Controllers/UserController.js";

const router = express.Router();

router.post("/client/signup", ClientSignupHandler);

router.post("/client/login", ClientLoginHandler);

export default router;
