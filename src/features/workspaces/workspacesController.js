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

async function findAll(_req, res) {
  try {
    const workspaces = await workspacesDAL.findAll();

    res.status(200).send(workspaces);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findAssetsByWorkspaceId(req, res) {
  try {
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        id,
      },
      include: [{ model: Asset }],
    };
    const workspaces = await workspacesDAL.findAll(options);
    const response = workspaces[0];

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findVendorsByWorkspaceId(req, res) {
  try {
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        id,
      },
      include: [{ model: Vendor }],
    };
    const workspaces = await workspacesDAL.findAll(options);
    const response = workspaces[0];

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findEmployeesByWorkspaceId(req, res) {
  try {
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        id,
      },
      include: [{ model: Employee }],
    };
    const workspaces = await workspacesDAL.findAll(options);
    const response = workspaces[0];

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findLocationsByWorkspaceId(req, res) {
  try {
    const { id } = req.params;
    const options = {
      attributes: ["id", "name"],
      where: {
        id,
      },
      include: [{ model: Location }],
    };
    const workspaces = await workspacesDAL.findAll(options);
    const response = workspaces[0];

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
