# Comentarios sobre tu código

## Documentación

Recuerda documentar todo tu codigo ya inicié el proceso con algunas partes. Puedes buscar jsDoc para ver como documentar codigo de javascript.

## Modularización

Hay que modularizar el codigo y tenerlo de forma organizada, si te das cuenta ya no existe el archivo server.js, lo que hise fué separarlo en diferentes archivos dentro de `src/server`, en donde encontraras por separado la conección con la base de datos, las rutas para cada recurso (solo tienes una, la de citas), las sentencias sql, y la app de express. Tu código que tenias de react lo moví a `src/web`.

(tambien creé 2 archivos de webpack uno para cada carpeta).

## Bases de datos

sobre la conneccion a la base de datos tengo dos comentarios.

El primero nunca hay que dejar los datos de connección visibles a los demas, cuando usas git debes omitir información con la que puedan acceder a tus datos, lo que e hace es usar variables de entorno en este caso se usa una libreria llamada dotenv para cargar las variables de entorno desde un archivo `.env` que se debe agregar al `.gitignore`, ahora no lo agregué para que puedas ver su estructura (es muy simple). esta configuracion se carga en las primeras lineas de `./src/server/index.js`.

El otro comentario es que no debes usar la sustitución directa de variables en los queries ya que te pueden mandar setencias sql y ejecutarlas, para esto agregué una funcion en el archivo `src/server/db.js` para que se puedas mandar tu información de forma segura.

