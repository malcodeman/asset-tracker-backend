import { DataTypes } from "sequelize";

import sequelize from "../../db";
import Asset from "../assets/assetsModel";
import Vendor from "../vendors/vendorsModel";
import Employee from "../employees/employeesModel";
import Location from "../locations/locationsModel";

const Workspace = sequelize.define("workspace", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  emoji: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

Workspace.hasMany(Asset);
Workspace.hasMany(Vendor);
Workspace.hasMany(Employee);
Workspace.hasMany(Location);
Asset.belongsTo(Workspace);
Vendor.belongsTo(Workspace);
Employee.belongsTo(Workspace);
Location.belongsTo(Workspace);

export default Workspace;
