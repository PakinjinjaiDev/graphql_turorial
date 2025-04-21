const mysql = require("../../configs/mysql");
const { GraphQLError } = require("graphql");

const userQuery_two = {
  Query: {
    users_two: async () => {
      try {
        const query = `SELECT * FROM users`;
        const [result] = await mysql.query(query);
        return result;
      } catch (error) {
        console.error("❌ Error fetching users:", error);
        throw new GraphQLError("Failed to fetch users");
      }
    }
  }
};

module.exports = userQuery_two;
