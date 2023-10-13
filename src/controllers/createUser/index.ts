import type { Request, Response } from "express";

import { createUser } from "../../services/index.js";

export async function createUserController(req: Request, res: Response) {
    const body = req.body
    const user = await createUser(body)
    res.json(user)
}
