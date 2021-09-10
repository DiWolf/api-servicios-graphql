import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
//configuración de variables de entorno
import * as dotenv from "dotenv";
const path = "src/config/.env";
dotenv.config({ path });
import sql from "./config/mysql.persistence";
//Revisar la documentación

import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

import resolvers from "../src/resolvers";

//Constantes
const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: async () => {
    return {
      sql,
    };
  },
});

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀 Microservicio proveedores está activo en ${url}`);
});
