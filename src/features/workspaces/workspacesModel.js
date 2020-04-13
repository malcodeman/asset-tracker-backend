import { DataTypes } from "sequelize";

import sequelize from "../../db";

const Workspace = sequelize.define("workspace", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Workspace;
