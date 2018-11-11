const { GraphQLServer } = require("graphql-yoga");

const db = require("./db");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const createServer = () =>
  new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });

module.exports = createServer;
