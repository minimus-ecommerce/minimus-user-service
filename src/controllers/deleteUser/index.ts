import type { Request, Response } from "express";

import { deleteUser } from "../../services/index.js";

export async function deleteUserController(req: Request, res: Response) {
    const userId = req.params['id'];
    const result = await deleteUser(userId!)
    res.json(result)
}
