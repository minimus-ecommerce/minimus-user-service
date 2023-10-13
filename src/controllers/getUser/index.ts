import type { Request, Response } from "express";

import { getUser } from "../../services/index.js";

export async function getUserController(req: Request, res: Response) {
    const userId = req.params["id"]
    const user = await getUser(userId!)
    res.json(user)
}
