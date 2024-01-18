import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@minimus-ecommerce/response";

import { loginUser } from "../../services/index.js";

export async function loginController(req: Request, res: Response) {
  const { userName, password } = req.body;
  const result = await loginUser(userName, password);
  if (result) {
    const token = jwt.sign({ userName }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.setHeader(
      "Set-Cookie",
      `token=${token}; HttpOnly; expires=${new Date(
        Date.now() + 3600000,
      ).toUTCString()}`,
    );
    return createSuccessResponse(res, 200);
  }
  return createErrorResponse(res, 401, "Invalid username or password");
}
