import type { Request, Response } from "express";
import { createSuccessResponse } from "@minimus-ecommerce/response";

import { getUser } from "../../services/index.js";

export async function getUserController(req: Request, res: Response) {
  const userId = req.params.id;
  if (!userId) return createSuccessResponse(res, 400, "User id is required");
  const user = await getUser(userId);
  return createSuccessResponse(res, 200, user);
}
