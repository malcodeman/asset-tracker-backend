import express from "express";

import controller from "./usersController";
import middlewares from "../../middlewares";

const router = express.Router();

router.use(middlewares.requireAuthentication);
router.get("/myself", controller.getMyself);
router.put("/myself", controller.updateMyself);

export default router;
