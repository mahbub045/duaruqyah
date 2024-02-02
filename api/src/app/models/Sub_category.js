const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const sub_category = sequelize.define("sub_category", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
  },
  cat_id: {
    type: DataTypes.INTEGER,
  },
  subcat_id: {
    type: DataTypes.INTEGER,
  },
  subcat_name_bn: {
    type: DataTypes.STRING,
  },
  subcat_name_en: {
    type: DataTypes.STRING,
  },
  no_of_dua: {
    type: DataTypes.INTEGER,
  },
});

// `sequelize.define` also returns the model
console.log(sub_category === sequelize.models.sub_category); // true
