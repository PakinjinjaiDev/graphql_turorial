const mysql = require("../../configs/mysql");
const { GraphQLError } = require("graphql");

const userMutation_two = {
  Mutation: {
    createUser_two: async (parent, args) => {
      try {
        let { name, email } = args;
        name = name.trim();
        email = email.trim();
        if (!name || !email) throw new GraphQLError("Name and email cannot be empty.");
        const email_query = `SELECT * FROM users WHERE email = '${email}'`;
        const [existing] = await mysql.query( email_query );
        if (existing.length > 0) throw new GraphQLError("Email already exists in the system.");
        const insert_query = `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`;
        await mysql.query( insert_query );
        return "User created successfully";
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
    updateUser_two: async (parent, args) => {
      try {
        let { id, name, email } = args;
        if (!id) throw new GraphQLError("ID is required.");
        const id_query = `SELECT * FROM users WHERE id = '${id}'`;
        const [result_select_id] = await mysql.query( id_query );
        if (result_select_id.length === 0) throw new GraphQLError("User not found.");
        if (name) {
          name = name.trim();
          if (!name) throw new GraphQLError("Name cannot be empty.");
          const update_name_query = `UPDATE users SET name = '${name}' WHERE id = '${id}'`;
          await mysql.query( update_name_query );
        }
        if (email) {
          email = email.trim();
          if (!email) throw new GraphQLError("Email cannot be empty.");
          const exitsting_query = `SELECT * FROM users WHERE email = '${email}' AND id != '${id}'`;
          const [existing] = await mysql.query( exitsting_query );
          if (existing.length > 0) throw new GraphQLError("Email already exists in the system.");
          const update_email_query = `UPDATE users SET email = '${email}' WHERE id = '${id}'`;
          await mysql.query( update_email_query );
        }
        return "User updated successfully";
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
    deleteUser_two: async (parent, args) => {
      try {
        const { id } = args;
        const id_query = `SELECT * FROM users WHERE id = '${id}'`;
        const [result_select_id] = await mysql.query( id_query );
        if (result_select_id.length === 0) throw new GraphQLError("User not found.");
        const delete_query = `DELETE FROM users WHERE id = '${id}'`;
        await mysql.query(delete_query);
        return `User with ID ${id} deleted successfully`;
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    }
  }
};

module.exports = userMutation_two;
