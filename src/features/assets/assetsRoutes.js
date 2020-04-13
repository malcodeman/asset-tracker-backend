import express from "express";

import controller from "./assetsController";
import middlewares from "../../middlewares";

const router = express.Router();

router.use(middlewares.requireAuthentication);
router.post("/", controller.create);
router.get("/", controller.findAll);
router.delete("/:id", controller.destroy);
router.put("/", controller.update);

export default router;
