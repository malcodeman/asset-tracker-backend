import { DataTypes } from "sequelize";

import sequelize from "../../db";

const Vendor = sequelize.define("vendor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Vendor;
