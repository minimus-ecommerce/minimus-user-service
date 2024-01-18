import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { createErrorResponse } from "@minimus-ecommerce/response";

// eslint-disable-next-line require-await
export async function authenticationMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { token } = req.cookies;
  if (!token) return createErrorResponse(res, 401, "Access denied");
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return next();
  } catch (err) {
    return createErrorResponse(res, 401, "Access denied");
  }
}
