import type { Request, Response } from "express";
import { createSuccessResponse, createErrorResponse } from "@minimus-ecommerce/response";

import { loginUser } from "../../services/index.js";

export async function loginController(req: Request, res: Response) {
    const { userName, password } = req.body;
    const result = await loginUser(userName, password)
    if (result) return createSuccessResponse(res, 200, result);
    return createErrorResponse(res, 401, "Invalid username or password")
}
