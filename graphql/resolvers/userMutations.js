const users = require("../../models/userModel");
const { GraphQLError } = require("graphql");

const userMutation = {
  Mutation: {
    createUser: async (parent, args) => {
      try {
        let { name, email } = args;
        name = name.trim();
        email = email.trim();
        if (!name || !email) throw new GraphQLError("Name and email cannot be empty.");
        const existingUser = await users.findOne({ where: { email } });
        if (existingUser) throw new GraphQLError("Email already exists in the system.");
        const user = await users.create({ name, email });
        return "User created successfully";
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
    updateUser: async (parent, args) => {
      try {
        let { id, name, email } = args;
        const user = await users.findByPk(id);
        if (!user) throw new GraphQLError("User not found.");
        if (name) {
          name = name.trim();
          if (!name) throw new GraphQLError("Name cannot be empty.");
          user.name = name;
        }
        if (email) {
          email = email.trim();
          if (!email) throw new GraphQLError("Email cannot be empty.");
          const existingUser = await users.findOne({ where: { email } });
          if (existingUser && existingUser.id !== id) {
            throw new GraphQLError("Email already exists in the system.");
          }
          user.email = email;
        }
        await user.save();
        return "User updated successfully";
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
    deleteUser: async (parent, args) => {
      try {
        const { id } = args;
        const user = await users.findByPk(id);
        if (!user) throw new GraphQLError("User not found.");
        await user.destroy();
        return `User with ID ${id} deleted successfully`;
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    }
  }
};

module.exports = userMutation;
