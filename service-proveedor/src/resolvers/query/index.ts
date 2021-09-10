const GMR = require("@wiicamp/graphql-merge-resolvers");

//Query
import resolverQueryProveedor from "./proveedor";

const mainResolver = GMR.merge([resolverQueryProveedor]);

export default mainResolver;
