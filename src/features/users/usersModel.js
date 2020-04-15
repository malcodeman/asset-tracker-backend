import { DataTypes } from "sequelize";

import sequelize from "../../db";
import Workspace from "../workspaces/workspacesModel";

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  company: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Workspace);
Workspace.belongsTo(User);

export default User;
