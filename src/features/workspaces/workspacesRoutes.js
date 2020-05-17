import express from "express";

import controller from "./workspacesController";
import middlewares from "../../middlewares";

const router = express.Router();

router.use(middlewares.requireAuthentication);
router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/:id/assets", controller.findAssetsByWorkspaceId);
router.get("/:id/vendors", controller.findVendorsByWorkspaceId);
router.get("/:id/employees", controller.findEmployeesByWorkspaceId);
router.get("/:id/locations", controller.findLocationsByWorkspaceId);
router.delete("/:id", controller.destroy);
router.put("/:id", controller.update);

export default router;
