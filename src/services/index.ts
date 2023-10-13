import { db } from "../db.js";

export async function getUser(userId: string) {
    const query = {
        text: "SELECT * FROM users WHERE id=$1",
        values: [userId]
    }
    const res = await db.query(query)
    return res.rows;
}

export async function listUsers() {
    const res = await db.query("SELECT * FROM users");
    return res.rows;
}
