const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
    process.env.MSSQL_DB, 
    process.env.MSSQL_USER, 
    process.env.MSSQL_PASSWORD, 
    {
        dialect: "mssql",
        host: process.env.MSSQL_HOST, 
        port: process.env.MSSQL_PORT,   
        logging: false,  // ✅ ปิดการแสดงผล SQL Query
    });
sequelize.authenticate()
  .then(() => console.log("✅ Connected to SQL Server"))
  .catch(err => console.error("❌ SQL Server connection error:", err));
module.exports = sequelize;
