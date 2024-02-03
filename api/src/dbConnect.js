const { Sequelize } = require("sequelize");
require("sqlite3").verbose();

const dbConnect = new Sequelize({
  dialect: "sqlite",
  storage: "dua_main.sqlite",
  logging: false,

  freezeTableName: true,
});
//Test the DB Connection
dbConnect
  .authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error: ", err));
module.exports = dbConnect;
