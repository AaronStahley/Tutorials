import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

const testSchema = `
type Query { 
    hi: String
    resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return "hello aaron";
    },
    resolutions() {
      return [
        {
          _id: "aseadasd",
          name: "get stuff done"
        },
        {
          _id: "fffffff",
          name: "Lose some weight"
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
