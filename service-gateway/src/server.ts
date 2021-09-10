import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

//
const proveedores = process.env.PROVEDOR_URL || "http://localhost:5008";

//define el gateway
const gateway = new ApolloGateway({
  serviceList: [{ name: "proveedores", url: proveedores }],
});

const startGateway = async () => {
  try {
    const { schema, executor } = await gateway.load();

    const server = new ApolloServer({ schema, executor });

    server.listen(5007).then(({ url }) => {
      console.log(`🚀 Servidor listo en la URL ${url}`);
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

startGateway();
