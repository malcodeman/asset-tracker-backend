import { DataTypes } from "sequelize";

import sequelize from "../../db";
import Asset from "../assets/assetsModel";
import Vendor from "../vendors/vendorsModel";

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
Asset.belongsTo(Workspace);
Vendor.belongsTo(Workspace);

export default Workspace;
