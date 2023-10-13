import type { Request, Response } from "express";

import { updateUser } from "../../services/index.js";

export async function updateUserController(req: Request, res: Response) {
    const userId = req.params["id"];
    const body = req.body;
    const user = await updateUser(body, userId!)
    res.json(user)
}
