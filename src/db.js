import { Sequelize } from "sequelize";

import constants from "./constants";
import utils from "./utils";

const sequelize = new Sequelize(constants.DB_URL, {
  logging: (message) => utils.logger.log(message, utils.logger.LEVELS.DEBUG),
});

async function authenticate() {
  try {
    await sequelize.authenticate();

    utils.logger.log("Connection has been established successfully.");
  } catch (error) {
    utils.logger.log(
      `Unable to connect to the database: ${error}`,
      utils.logger.LEVELS.ERROR
    );
  }
}

authenticate();

export default sequelize;
