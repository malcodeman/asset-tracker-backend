import utils from "../../utils";
import DAL from "./locationsDAL";

async function create(req, res) {
  try {
    const { values } = req.body;
    const location = await DAL.create(values);
    const response = {
      ...location.dataValues,
    };

    res.status(200).send(response);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

export { create };

export default {
  create,
};
