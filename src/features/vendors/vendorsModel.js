import { DataTypes } from "sequelize";

import sequelize from "../../db";
import Asset from "../assets/assetsModel";

const Vendor = sequelize.define("vendor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

Vendor.hasOne(Asset);
Asset.belongsTo(Vendor);

export default Vendor;
