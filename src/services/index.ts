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

export async function createUser(userDetails: any) {
    const query = {
        text: "INSERT INTO users VALUES (default, $1, $2, $3, now(), crypt($4, gen_salt('bf')));",
        values: Object.values(userDetails)
    }
    const res = await db.query(query);
    return res;
}

export async function updateUser(userDetails: any, userId: string) {
    const query = {
        text: "UPDATE users SET user_name = $1, first_name = $2, last_name = $3 WHERE id = $4",
        values: [...Object.values(userDetails), userId]
    }
    const res = await db.query(query);
    return res;
}

export async function deleteUser(userId: string) {
    const query = {
        text: "DELETE FROM users WHERE id = $1;",
        values: [userId]
    }
    const res = await db.query(query);
    return res;
}

export async function loginUser(userName: string, password: string) {
    const query = {
        text: "SELECT user_name FROM users WHERE user_name = $1 AND password = crypt($2, password);",
        values: [userName, password]
    }
    const res = await db.query(query);
    if (res.rowCount == 1 && res.rows[0].user_name === userName) return true;
    return false;
}
