import Express from 'express';
import 'dotenv/config'

import { db } from './db.js';
import { router } from './routes.js';

const app = Express()

app.use(router)

app.listen(3000, async () => {
    try {
        await db.connect()
        console.log("Listening on port 3000")
    } catch(e) {
        console.log("db connection fail", e)
        process.exit()
    }
})
