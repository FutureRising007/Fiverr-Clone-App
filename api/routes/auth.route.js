import express from "express";
// import { deleteUser } from "../controllers/user.controller.js";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register)
router.get("/login", login)
router.get("/logout", logout)
router.pu

export default router;