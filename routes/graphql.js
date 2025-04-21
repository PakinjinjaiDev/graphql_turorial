const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("../graphql/schema");

module.exports = createHandler({
  schema,
  formatError: (err) => {
    const message = err.message;
    console.log("GraphQL Error:", message);
    return {
      message: message
    }
  }
});