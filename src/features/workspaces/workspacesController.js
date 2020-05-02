import utils from "../../utils";
import workspacesDAL from "./workspacesDAL";
import Asset from "../assets/assetsModel";
import Vendor from "../vendors/vendorsModel";
import Employee from "../employees/employeesModel";
import Location from "../locations/locationsModel";

async function create(req, res) {
  try {
    const userId = req.userId;
    const { values } = req.body;
    const workspace = await workspacesDAL.create({ ...values, userId });
    const response = {
      ...workspace.dataValues,
    };

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findAll(req, res) {
  try {
    const userId = req.userId;
    const where = {
      where: {
        userId,
      },
    };
    const workspaces = await workspacesDAL.findAll(where);

    res.status(200).send(workspaces);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findAssetsByWorkspaceId(req, res) {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        userId,
        id,
      },
      include: [
        { model: Asset, include: [{ model: Vendor }, { model: Location }] },
      ],
    };
    const response = await workspacesDAL.findOne(options);

    if (!response) {
      utils.logger.log("Workspace not found", utils.logger.LEVELS.ERROR);
      res.status(404).send({ message: "Workspace not found" });
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findVendorsByWorkspaceId(req, res) {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        userId,
        id,
      },
      include: [{ model: Vendor }],
    };
    const response = await workspacesDAL.findOne(options);

    if (!response) {
      utils.logger.log("Workspace not found", utils.logger.LEVELS.ERROR);
      res.status(404).send({ message: "Workspace not found" });
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findEmployeesByWorkspaceId(req, res) {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        userId,
        id,
      },
      include: [{ model: Employee }],
    };
    const response = await workspacesDAL.findOne(options);

    if (!response) {
      utils.logger.log("Workspace not found", utils.logger.LEVELS.ERROR);
      res.status(404).send({ message: "Workspace not found" });
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findLocationsByWorkspaceId(req, res) {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        userId,
        id,
      },
      include: [{ model: Location }],
    };
    const response = await workspacesDAL.findOne(options);

    if (!response) {
      utils.logger.log("Workspace not found", utils.logger.LEVELS.ERROR);
      res.status(404).send({ message: "Workspace not found" });
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function destroy(req, res) {
  try {
    const { id } = req.params;
    const options = {
      where: {
        id,
      },
    };
    const workspace = await workspacesDAL.destroy(options);

    res.status(200).send(Boolean(workspace));
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

export {
  create,
  findAll,
  findAssetsByWorkspaceId,
  destroy,
  findVendorsByWorkspaceId,
  findEmployeesByWorkspaceId,
  findLocationsByWorkspaceId,
};

export default {
  create,
  findAll,
  findAssetsByWorkspaceId,
  destroy,
  findVendorsByWorkspaceId,
  findEmployeesByWorkspaceId,
  findLocationsByWorkspaceId,
};
