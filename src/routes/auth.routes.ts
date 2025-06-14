import { Router } from "express";
import validate from "../middlewares/validation";
import { registerUser, loginUser } from "../controllers/user/user.controller";
import { loginSchema, registerSchema } from "../validation/auth.validation";

const router = Router();

router.post("/register", validate(registerSchema), registerUser);

router.post("/login", validate(loginSchema), loginUser);

export default router;
