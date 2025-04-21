const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.PG_DB, 
  process.env.PG_USER, 
  process.env.PG_PASSWORD, 
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    logging: false, // 👉 ปิดการแสดง log ของ Sequelize
  }
);
sequelize.authenticate()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch(err => console.error("❌ PostgreSQL connection error:", err));

module.exports = sequelize;