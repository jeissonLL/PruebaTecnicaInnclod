# PruebaTecnicaInnclod
PruebaTecnicaInnclod_v1

### Manual de despliegue


***
- Descargue la aplicación por medio del siguiente enlace de github: https://github.com/jeissonLL/PruebaTecnicaInnclod/tree/main Asegúrese que el proyecto quede en la siguiente ruta C:\xampp\htdocs.
- Clone el proyecto y ahora migre la base de datos llamada **db_inncloud.sql** Esta base de datos esta creada en el gestor MySql con el servidor XAMPP.
- Si va hacer uso del servidor XAMPP debe tener en cuenta que para correr el servidor debe seleccionar la opción **Start**  y asegurarse que este en color verde de lo contrario, configure los puertos del servidor.
- Ahora seleccione la opción **admin** la que esta en el apartado del servidor MySql, se abrirá el administrador de base de datos y importe la base de datos que descargo anteriormente. Seleccione la opción Importar, seleccione la opción seleccionar archivo y luego de click en el botón importar que se ubica en la parte baja.
- Una vez la base de datos quede correctamente importada, abra los dos proyectos independientes **BE_inncloud** y **FE_inncloud**, primero debe ejecutar el proyecto **BE_inncloud** haciendo uso de los comandos artisan de larabel **php artisan serve**.
Nota: Debe tener en cuenta que debe respetar las rutas que están puestas por defecto para poder ejecutar el proyecto correctamente.
- Luego en el proyecto **FE_inncloud** debe ejecutar los comandos **npm run dev** para poder visualizar el proyecto.
- Una vez ejecutado el comando seleccione la ruta con Control + click en la ruta que muestra y Ahora pegue esta ruta en el navegador http://127.0.0.1:5173/login.
**Nota:** Cuando ejecute los comandos asegúrese de estar en la ruta correspondiente en los archivos del proyecto.
