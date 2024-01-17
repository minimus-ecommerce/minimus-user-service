import type { Request, Response } from "express";
import { createSuccessResponse } from "@minimus-ecommerce/response";

import { updateUser } from "../../services/index.js";

export async function updateUserController(req: Request, res: Response) {
    const userId = req.params["id"];
    const body = req.body;
    const user = await updateUser(body, userId!)
    return createSuccessResponse(res, 200, user)
}
