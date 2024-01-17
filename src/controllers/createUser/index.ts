import type { Request, Response } from "express";
import { createSuccessResponse } from "@minimus-ecommerce/response";

import { createUser } from "../../services/index.js";

export async function createUserController(req: Request, res: Response) {
    const body = req.body
    const user = await createUser(body)
    return createSuccessResponse(res, 200, user)
}
