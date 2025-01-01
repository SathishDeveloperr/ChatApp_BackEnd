import express from "express";
import { signUp, signIn, google, signOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp); //Completed
router.post("/signin", signIn);//Completed
router.post("/google", google); //Not completed
router.get("/signout", signOut);//Completed

export default router;