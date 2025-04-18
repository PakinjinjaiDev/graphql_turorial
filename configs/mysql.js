const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
    process.env.MYSQL_DB, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, 
    {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql",
        logging: false,  // ✅ ปิดการแสดงผล SQL Query
    });
sequelize.authenticate()
  .then(() => console.log("✅ Connected to MySQL"))
  .catch(err => console.error("❌ MySQL connection error:", err));
module.exports = sequelize;
