import express from 'express'

const router = express.Router()


import { Auth } from "../controllers/auth.js";

router.get('/auth', (req, res) => res.status(401).json({ auth: 'required', status: '401'}))
router.post("/auth", Auth);

export default router
