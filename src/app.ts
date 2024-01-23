import jwt from "jsonwebtoken";
import Express from "express";
import cookieParser from "cookie-parser";
import { createSuccessResponse } from "@minimus-ecommerce/response";
import "dotenv/config";

import { db } from "./db.js";
import { authenticationMiddleWare } from "./middlewares/authentication.js";
import { router } from "./routes.js";

const app = Express();

app.use(Express.json());
app.use(cookieParser());
router.use(authenticationMiddleWare);
app.use("/api/user", router);

app.get("/api/user/setAuthCookie", (req, res) => {
  const userName = "akash";
  const token = jwt.sign({ userName }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  res.setHeader(
    "Set-Cookie",
    `token=${token}; HttpOnly; expires=${new Date(
      Date.now() + 3600000,
    ).toUTCString()}`,
  );
  return createSuccessResponse(res, 200);
});

app.listen(3000, async () => {
  try {
    await db.connect();
    // eslint-disable-next-line no-console
    console.log("Listening on port 3000, http://localhost:3000");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log("db connection fail", err);
  }
});
