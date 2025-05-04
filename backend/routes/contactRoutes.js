import express from "express";
import { registerContact } from "../controllers/contactController.js";

const router = express.Router();

router.route("/").post(registerContact);

export default router;
