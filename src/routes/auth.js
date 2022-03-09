import express from 'express'
import { Auth } from "../controllers/auth.js";

const router = express.Router()

router.post("/auth", Auth);

export default router
