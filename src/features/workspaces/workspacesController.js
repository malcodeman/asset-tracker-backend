import utils from "../../utils";
import workspacesDAL from "./workspacesDAL";
import Asset from "../assets/assetsModel";

async function create(req, res) {
  try {
    const userId = req.userId;
    const { name } = req.body;
    const workspaces = await workspacesDAL.findAll({
      raw: true,
      where: {
        userId,
      },
    });
    const values = {
      userId,
      name: name || `Workspace ${workspaces.length + 1}`,
    };
    const workspace = await workspacesDAL.create(values);
    const response = {
      ...workspace.dataValues,
      assets: [],
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
      where: {
        id,
      },
      include: [{ model: Asset }],
    };
    const workspaces = await workspacesDAL.findAll(options);

    res.status(200).send(workspaces);
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

export { create, findAll, findAssetsByWorkspaceId, destroy };

export default {
  create,
  findAll,
  findAssetsByWorkspaceId,
  destroy,
};
