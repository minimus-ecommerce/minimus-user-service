import type { Request, Response } from "express";

import { listUsers } from "../../services/index.js";

export async function listUserController(req: Request, res: Response) {
    const users = await listUsers();
    res.json(users);
}
