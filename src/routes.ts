import Express from "express"

import { getUserController } from "./controllers/getUser/index.js"
import { listUserController } from "./controllers/listUser/index.js"
import { createUserController } from "./controllers/createUser/index.js"
import { deleteUserController } from "./controllers/deleteUser/index.js"
import { updateUserController } from "./controllers/updateUser/index.js"
import { loginController } from "./controllers/login/index.js"

export const router = Express.Router()

router.post("/login", loginController)
router.get("/listUser", listUserController)
router.get("/getUser/:id", getUserController)
router.post("/createUser", createUserController)
router.patch("/updateUser/:id", updateUserController)
router.delete("/deleteUser/:id", deleteUserController)
