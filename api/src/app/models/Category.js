const { Sequelize, DataTypes } = require("sequelize");
const dbConnect = require("../dbConnect");

const Category = dbConnect.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cat_id: {
    type: DataTypes.INTEGER,
  },
  cat_name_bn: {
    type: DataTypes.TEXT,
  },
  cat_name_en: {
    type: DataTypes.TEXT,
  },
  no_of_subcat: {
    type: DataTypes.INTEGER,
  },
  no_of_dua: {
    type: DataTypes.INTEGER,
  },
  cat_icon: {
    type: DataTypes.TEXT,
  },
});

Category.sync().then(() => {
  console.log("Synced");
});

module.exports = Category;
