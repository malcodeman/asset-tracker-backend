import utils from "../../utils";
import assetsDAL from "./assetsDAL";
import Vendor from "../vendors/vendorsModel";
import Location from "../locations/locationsModel";

async function create(req, res) {
  try {
    const { values } = req.body;
    const asset = await assetsDAL.create(values);
    const where = {
      where: {
        id: asset.dataValues.id,
      },
      include: [{ model: Vendor }, { model: Location }],
    };
    const response = await assetsDAL.findOne(where);

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function findAll(_req, res) {
  try {
    const assets = await assetsDAL.findAll({ raw: true });

    res.status(200).send(assets);
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
    const asset = await assetsDAL.destroy(options);

    res.status(200).send(Boolean(asset));
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function update(req, res) {
  try {
    const { id, values } = req.body;
    const options = {
      where: {
        id,
      },
    };
    const update = await assetsDAL.update(values, options);
    const updated = Boolean(update[0]);

    if (updated) {
      const assets = await assetsDAL.findAll(options);
      const asset = assets[0];

      res.status(200).send(asset);
    } else {
      res.status(400).send({ exception: "AssetNotFoundException" });
    }
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

export { create, findAll, destroy, update };

export default {
  create,
  findAll,
  destroy,
  update,
};
