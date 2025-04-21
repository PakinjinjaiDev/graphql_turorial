const { DataTypes } = require("sequelize");
const mysql = require("../configs/mysql"); // Connection MySQL

const users = mysql.define("users", { 
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  tableName: "users",
  timestamps: false
});

module.exports = users;

