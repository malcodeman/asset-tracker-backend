import express from "express";

import workspacesController from "./workspacesController";
import middlewares from "../../middlewares";

const router = express.Router();

router.use(middlewares.requireAuthentication);
router.post("/", workspacesController.create);
router.get("/", workspacesController.findAll);
router.get("/:id/assets", workspacesController.findAssetsByWorkspaceId);
router.get("/:id/vendors", workspacesController.findVendorsByWorkspaceId);
router.get("/:id/employees", workspacesController.findEmployeesByWorkspaceId);
router.delete("/:id", workspacesController.destroy);

export default router;
