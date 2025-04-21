const { gql } = require("graphql-tag");

module.exports = gql`
  type users {
    id: String
    name: String
    email: String
  }
  extend type Query {
    users: [users]
  }
  extend type Mutation {
    createUser(name: String!, email: String!): String
    updateUser(id: Int!, name: String, email: String): String
    deleteUser(id: Int!): String
  }
`;
