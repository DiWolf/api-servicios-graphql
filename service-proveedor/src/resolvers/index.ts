import { GraphQLResolverMap } from "apollo-graphql";
import query from "./query";
import mutation from "./mutation";
const resolvers: GraphQLResolverMap = {
  ...query,
  ...mutation,
};

export default resolvers;
