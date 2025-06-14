/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Request, Response } from "express";
import { User } from "../../database/models/User";
import catchAsync from "../../utils/catchAsync";
import { response } from "../../utils/response";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { envConfig } from "../../config/envConfig";
import {
  createUser,
  findUser,
  getUserWithPreferences as fetchUserWithPreferences,
} from "../../services/user.service";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await findUser({ email });
  if (existingUser) {
    return response(res, httpStatus.BAD_REQUEST, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser({ name, email, password: hashedPassword });

  const token = jwt.sign({ id: user.id }, envConfig.jwt.secret, {
    expiresIn: "7d",
  });

  return response(res, httpStatus.CREATED, "User created successfully", {
    user,
    token,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return response(res, httpStatus.BAD_REQUEST, "User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return response(res, httpStatus.BAD_REQUEST, "Invalid password");
  }

  const token = jwt.sign({ id: user.id }, envConfig.jwt.secret, {
    expiresIn: "7d",
  });

  return response(res, httpStatus.OK, "Login successful", { token, user });
});

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}

const getUserWithPreferences = catchAsync(
  async (req: AuthenticatedRequest, res: Response) => {
    const user = await fetchUserWithPreferences({ id: req.user.id });
    return response(res, httpStatus.OK, "User found", { user });
  }
);

export { loginUser, registerUser, getUserWithPreferences };
