
import type { Request, Response } from "express";

export async function listUserController(req: Request, res: Response) {
    res.send("Hello There")
}
