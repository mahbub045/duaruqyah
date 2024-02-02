const { Sequelize } = require("sequelize");
require("sqlite3").verbose();
  

  const dbConnect = new Sequelize({
    dialect: "sqlite",
    storage: '../../dua_main.sqlite',
    logging: false,
  });
  
  module.exports = dbConnect;