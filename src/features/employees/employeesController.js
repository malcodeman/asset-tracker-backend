import utils from "../../utils";
import DAL from "./employeesDAL";

async function create(req, res) {
  try {
    const { values } = req.body;
    const employee = await DAL.create(values);
    const response = {
      ...employee.dataValues,
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
