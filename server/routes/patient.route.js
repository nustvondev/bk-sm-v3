import express from "express";
import PatientController from "../controllers/patient.controller.js";
const router = express.Router();

// todo: get me from api

router.post("/register", PatientController.register);
export default router;
