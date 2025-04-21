const { gql } = require("graphql-tag");

module.exports = gql`
  type users {
    id: String
    name: String
    email: String
  }
  extend type Query {
    users_two: [users]
  }
  extend type Mutation {
    createUser_two(name: String!, email: String!): String
    updateUser_two(id: Int!, name: String, email: String): String
    deleteUser_two(id: Int!): String
  }
`;
