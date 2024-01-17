import Express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config'

import { authenticationMiddleWare } from './middlewares/authentication.js';
import { router } from './routes.js';

const app = Express()

app.use(Express.json())
app.use(cookieParser())
app.use(authenticationMiddleWare)
app.use("/api/user", router)

app.listen(3000, async () => {
    try {
        console.log("Listening on port 3000, http://localhost:3000")
    } catch(e) {
        console.log("db connection fail", e)
    }
})
