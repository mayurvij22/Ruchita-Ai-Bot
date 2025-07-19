import express from "express";
import { createUser, getHealthTips } from "../controller/healthController.js";

const router = express.Router();

router.post("/user", createUser);
router.post("/ask-health", getHealthTips);

export default router;
