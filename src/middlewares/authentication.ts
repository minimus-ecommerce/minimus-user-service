import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { createErrorResponse } from '@minimus-ecommerce/response';

export async function authenticationMiddleWare(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (!token) return createErrorResponse(res, 401, 'Access denied');
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    next()
  } catch (err) {
    return createErrorResponse(res, 401, 'Access denied');
  }
}