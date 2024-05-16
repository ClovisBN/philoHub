const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);

const UserModel = require("../model/UserModel");
const userModel = UserModel(sequelize, DataTypes);
const RoleModel = require("../model/RoleModel");
const roleModel = RoleModel(sequelize, DataTypes);

userModel.belongsTo(roleModel);

roleModel.hasMany(userModel);

const runDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // Refresh DATABASE (don't tutch)
  // await sequelize.sync({ force: true });
};

module.exports = {
  runDb,
  userModel,
  roleModel,
};
