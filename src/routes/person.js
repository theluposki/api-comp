import express from 'express'

const router = express.Router()

import {
  personCreate,
  personsGET,
  personsGETOne,
  personsUpdateOne,
  personDeleteOne,
} from "../controllers/persons.js";

router.get("/persons", personsGET);
router.get("/persons/:id", personsGETOne);
router.post("/persons", personCreate);
router.put("/persons/:id", personsUpdateOne);
router.delete("/persons/:id", personDeleteOne);

export default router
