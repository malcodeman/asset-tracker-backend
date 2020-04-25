import { DataTypes } from "sequelize";

import sequelize from "../../db";

const Location = sequelize.define("location", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Location;
