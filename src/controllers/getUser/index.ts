import type { Request, Response } from "express";

export async function getUserController(req: Request, res: Response) {
    res.send("Hello There")
}
