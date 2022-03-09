import router from "./router.js";
import { Auth } from "../controllers/auth.js";

router.get('/', (req, res) => res.status(401).json({ auth: 'required', status: '401'}))
router.post("/", Auth);

export default router;
