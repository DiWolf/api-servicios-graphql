import {
  CREAR_PROVEEDOR,
  DELETE_PROVEEDOR,
  EDITAR_PROVEEDOR,
} from "../../sql/SQL_PROVEEDORES";

const resolverMutationProveedor = {
  Mutation: {
    //Agregar un nuevo proveedor a la base de datos
    async addProveedor(_: any, { proveedor }: any, { sql }: any) {
      try {
        let { nombreProveedor, representante, telefono, email } = proveedor;
        await sql.query("START TRANSACTION");
        await sql.query(CREAR_PROVEEDOR, [
          nombreProveedor,
          representante,
          telefono,
          email,
        ]);
        await sql.query("COMMIT");
        return "Operación finalizada con éxito";
      } catch (error: any) {
        await sql.query("ROLLBACK");
        throw new Error(error);
      }
    },
    //Actualizar la información del proveedor
    async updateProveedor(_: any, { proveedor }: any, { sql }: any) {
      try {
        let { nombreProveedor, representante, telefono, email, id } = proveedor;
        await sql.query("START TRANSACTION");
        await sql.query(EDITAR_PROVEEDOR, [
          nombreProveedor,
          representante,
          telefono,
          email,
          id,
        ]);
        await sql.query("COMMIT");
        return "Información actualizada correctamente";
      } catch (error: any) {
        throw new Error(error);
      }
    },
    //Eliminar registro
    async deleteProveedor(_: any, { id }: any, { sql }: any) {
      try {
        await sql.query("START TRANSACTION");
        await sql.query(DELETE_PROVEEDOR, [id]);
        await sql.query("COMMIT");
        return "Registro eliminado";
      } catch (error: any) {
        await sql.query("ROLLBACK");
        throw new Error(error);
      }
    },
  },
};

export default resolverMutationProveedor;
