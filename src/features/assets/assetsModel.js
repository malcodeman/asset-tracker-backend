import { DataTypes } from "sequelize";

import sequelize from "../../db";

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
  usedBy: {
    type: DataTypes.STRING,
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

export default Asset;
