import express from "express";

import controller from "./locationsController";
import middlewares from "../../middlewares";

const router = express.Router();

router.use(middlewares.requireAuthentication);
router.post("/", controller.create);

export default router;
