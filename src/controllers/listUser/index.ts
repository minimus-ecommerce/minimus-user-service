import type { Request, Response } from "express";
import { createSuccessResponse } from "@minimus-ecommerce/response";

import { listUsers } from "../../services/index.js";

export async function listUserController(req: Request, res: Response) {
    // const users = await listUsers();
    const users = [{id: 1, name: "Akash"}];
    return createSuccessResponse(res, 200, [{ id: 1, name: "Akash"}])
    // res.json(users);
}
