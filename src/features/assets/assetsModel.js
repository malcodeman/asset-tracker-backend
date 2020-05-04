import { DataTypes } from "sequelize";

import sequelize from "../../db";
import Employee from "../employees/employeesModel";

const Asset = sequelize.define("asset", {
  tag: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING,
  },
  photoURL: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  purchaseDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  itemType: {
    type: DataTypes.STRING,
  },
  conditionNotes: {
    type: DataTypes.STRING,
  },
});

Asset.belongsToMany(Employee, { through: "AssetEmployee" });
Employee.belongsToMany(Asset, { through: "AssetEmployee" });

export default Asset;
