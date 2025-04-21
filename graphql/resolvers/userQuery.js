const users = require("../../models/userModel");
const { GraphQLError } = require("graphql");

const userQuery = {
    Query: {
      users: async () => {
        try {
          return await users.findAll();
        } catch (error) {
          console.error("❌ Error fetching users:", error);
          throw new GraphQLError("Failed to fetch users");
        }
      }
    }
  };
module.exports = userQuery;

