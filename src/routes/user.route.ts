import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { getUserWithPreferences } from "../controllers/user/user.controller";
const router = Router();

router.get("/get-user", authenticate, getUserWithPreferences);

export default router;
