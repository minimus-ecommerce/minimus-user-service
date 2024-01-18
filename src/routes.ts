import Express from "express"

import { getUserController } from "./controllers/getUser/index.js"
import { listUserController } from "./controllers/listUser/index.js"
import { createUserController } from "./controllers/createUser/index.js"
import { deleteUserController } from "./controllers/deleteUser/index.js"
import { updateUserController } from "./controllers/updateUser/index.js"
import { loginController } from "./controllers/login/index.js"


export const router = Express.Router()

router.get("/", listUserController)
router.post("/", createUserController)
router.get("/:id", getUserController)
router.patch("/:id", updateUserController)
router.delete("/:id", deleteUserController)
router.post("/login", loginController)
