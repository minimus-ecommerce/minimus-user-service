import Express from "express"

import { getUserController } from "./controllers/getUser/index.js"
import { listUserController } from "./controllers/listUser/index.js"

export const router = Express.Router()

router.get("/listUser", listUserController)
router.get("/getUser/:id", getUserController)
