import utils from "../../utils";
import workspacesDAL from "./workspacesDAL";

async function create(req, res) {
  try {
    const userId = req.userId;
    const { name } = req.body;
    const values = {
      userId,
      name,
    };
    const workspace = await workspacesDAL.create(values);

    res.status(200).send(workspace);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findAll(req, res) {
  try {
    const workspaces = await workspacesDAL.findAll({ raw: true });

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

export { create, findAll, destroy };

export default {
  create,
  findAll,
  destroy,
};
