const GMR = require("@wiicamp/graphql-merge-resolvers");

//Query
import resolverMutationProveedor from "./proveedores";

const resolverMutation = GMR.merge([resolverMutationProveedor]);

export default resolverMutation;
