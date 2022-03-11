import express from 'express'
import auth from '../middlewares/auth.js'
const router = express.Router()

import {
  personCreate,
  personsGET,
  personsGETOne,
  personsUpdateOne,
  personDeleteOne,
} from "../controllers/persons.js";

router.get("/persons", auth, personsGET);
router.get("/persons/:id", auth, personsGETOne);
router.post("/persons", personCreate);
router.put("/persons/:id", auth, personsUpdateOne);
router.delete("/persons/:id", auth, personDeleteOne);

export default router
