import { DataTypes } from "sequelize";

import sequelize from "../../db";
import Asset from "../assets/assetsModel";

const Location = sequelize.define("location", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

Location.hasOne(Asset);
Asset.belongsTo(Location);

export default Location;
