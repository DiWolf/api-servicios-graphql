//Crear un proveedor
export const CREAR_PROVEEDOR =
  "INSERT INTO proveedor (nombreProveedor,representante,telefono,email) VALUES (?,?,?,?)";
//editar proveedor
export const EDITAR_PROVEEDOR =
  "UPDATE proveedor SET nombreProveedor=?, representante=?, telefono=?, email=?  WHERE id=?";
//Eliminar proveedor
export const DELETE_PROVEEDOR = "DELETE FROM proveedor WHERE id= ? ";
//Listar proveedor
export const SELECT_PROVEEDOR = "SELECT * FROM proveedor WHERE id=? LIMIT 1";
//Listar todos los proveedores
export const SELECT_ALL_PROVEEDORES = "SELECT * FROM proveedor ";
