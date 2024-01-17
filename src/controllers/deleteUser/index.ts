import type { Request, Response } from "express";
import { createSuccessResponse } from "@minimus-ecommerce/response";

import { deleteUser } from "../../services/index.js";

export async function deleteUserController(req: Request, res: Response) {
    const userId = req.params['id'];
    const result = await deleteUser(userId!)
    return createSuccessResponse(res, 200, result)
}
