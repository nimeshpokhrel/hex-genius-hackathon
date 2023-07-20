import express from "express";
import {
  ClientLoginHandler,
  ClientSignupHandler,
  ClientValidateHandler,
} from "../Controllers/UserController.js";

const router = express.Router();

router.post("/client/signup", ClientSignupHandler);

router.post("/client/validate", ClientValidateHandler);

router.post("/client/login", ClientLoginHandler);

export default router;
