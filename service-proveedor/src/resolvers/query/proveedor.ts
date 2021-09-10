import {
  SELECT_ALL_PROVEEDORES,
  SELECT_PROVEEDOR,
} from "./../../sql/SQL_PROVEEDORES";
const resolverQueryProveedor = {
  Query: {
    async obtenerProveedores(_: any, __: any, { sql }: any) {
      try {
        const [rows]: [any] = await sql.execute(SELECT_ALL_PROVEEDORES);
        return rows;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async obtenerProveedor(_: any, { id }: any, { sql }: any) {
      try {
        const [rows]: [any] = await sql.execute(SELECT_PROVEEDOR, [id]);
        return rows[0];
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
};

export default resolverQueryProveedor;
