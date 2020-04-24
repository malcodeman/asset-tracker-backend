import { DataTypes } from "sequelize";

import sequelize from "../../db";

const Employee = sequelize.define("employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  hireDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  birthDate: {
    type: DataTypes.DATE,
  },
});

export default Employee;
