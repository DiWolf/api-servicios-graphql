# Bienvenido a API EJEMPLO MICROSERVICIO con Graphql

Este repositorio es un ejemplo y al mismo tiempo ejercicio para aprender el manejo de microservicios utilizando GraphQL, Apollo-Gateway. 

## Cosas que faltan

 - [ ] Agregar archivos Dockerfile para desplegar en docker 
 - [ ] Agregar archivo Docker Composer para unir los servicios 
 - [ ] Agregar un nuevo servicio para manejar los datos de contacto del proveedor
 - [ ] Mejorar aun la arquitectura del proyecto con TDD y SOLID

## Cómo funciona

Debes contar con la versión 12 de NodeJS o superior  e instalar los paquetes del proyecto con npm install. El código fuente se encuentra en TypeScript por lo que se vuelve un requisito.

Crea un archivo .env en el apartado config en el servicio proveedor con las siguientes variables

 - NODE_ENV="DEVELOPMENT"
 - PORT="5008"
 - MYSQL_HOST="ip_servidor_base_dedatos"
 - MYSQL_USER="usuario_base_de_Datos"
 - MYSQL_PASSWORD="contraseña_base_dedatos"
 - MYSQL_DB="nombre_base_de_Datos"

El servicio lo único que realiza son las operaciones básicas de: 

 - Crear
 - Editar 
 - Eliminar
 - Listar 

A medida de lo posible integraré los servicios faltantes.

Muchas gracias, espero que este código te sirva. 
