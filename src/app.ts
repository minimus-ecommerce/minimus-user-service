import jwt from 'jsonwebtoken';
import Express from 'express';
import cookieParser from 'cookie-parser';
import { createSuccessResponse } from '@minimus-ecommerce/response';
import 'dotenv/config'

import { authenticationMiddleWare } from './middlewares/authentication.js';
import { router } from './routes.js';

const app = Express()

app.use(Express.json())
app.use(cookieParser())
router.use(authenticationMiddleWare)
app.use("/api/user", router)

app.get('/setAuthCookie', (req, res) => {
    const userName = 'akash'
    const token = jwt.sign({ userName }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    res.setHeader("Set-Cookie", `token=${token}; HttpOnly; expires=${new Date(Date.now() + 3600000).toUTCString()}`);
    return createSuccessResponse(res, 200)
})

app.listen(3000, async () => {
    try {
        console.log("Listening on port 3000, http://localhost:3000")
    } catch(e) {
        console.log("db connection fail", e)
    }
})
