import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import {
  getUserWithPreferences,
  updateUserPreferences,
} from "../controllers/user/user.controller";
import validate from "../middlewares/validation";
import { updateUserPreferencesSchema } from "../validation/user.validation";
const router = Router();

router.get("/get-user", authenticate, getUserWithPreferences);
router.put(
  "/update-preferences",
  authenticate,
  validate(updateUserPreferencesSchema),
  updateUserPreferences
);

export default router;
