import type { Request, Response } from "express";

import { loginUser } from "../../services/index.js";

export async function loginController(req: Request, res: Response) {
    const { userName, password } = req.body;
    const result = await loginUser(userName, password)
    if (result) return res.json({status: "success"});
    return res.json({status: "failure"})
}
