import pg from 'pg';

const { Client } = pg;
export const db = new Client({
    host: process.env["DB_HOST"],
    database: process.env["DB_NAME"],
    user: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
})
