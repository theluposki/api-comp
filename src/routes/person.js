import router from "./router.js";
import {
  personCreate,
  personsGET,
  personsGETOne,
  personsUpdateOne,
  personDeleteOne,
} from "../controllers/persons.js";

router.get("/", personsGET);
router.get("/:id", personsGETOne);
router.post("/", personCreate);
router.put("/:id", personsUpdateOne);
router.delete("/:id", personDeleteOne);

export default router;
