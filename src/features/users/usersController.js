import utils from "../../utils";
import DAL from "./usersDAL";

async function getMyself(req, res) {
  try {
    const id = req.userId;
    const users = await DAL.findAll({
      attributes: { exclude: ["password"] },
      where: {
        id,
      },
    });
    const user = users[0];

    res.status(200).send(user);
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

async function updateMyself(req, res) {
  try {
    const id = req.userId;
    const { values } = req.body;
    const options = {
      attributes: { exclude: ["password"] },
      where: {
        id,
      },
    };
    const update = await DAL.update(values, options);
    const updated = Boolean(update[0]);

    if (updated) {
      const users = await DAL.findAll(options);
      const user = users[0];

      res.status(200).send(user);
    } else {
      res.status(400).send({ exception: "UserNotFoundException" });
    }
  } catch (error) {
    utils.logger.log(error, utils.logger.LEVELS.ERROR);
    res.status(400).send({ message: error.message, stack: error.stack });
  }
}

export { getMyself, updateMyself };

export default {
  getMyself,
  updateMyself,
};
