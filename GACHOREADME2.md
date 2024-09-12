## Paso 1: Levantar los servicios con Docker Compose
### Abrir la Terminal n°1:

Abre una terminal en Visual Studio Code (puedes hacerlo presionando `Ctrl + ` (tecla al lado de 1)).
Asegúrate de que estás en la carpeta raíz de tu proyecto donde se encuentra el archivo docker-compose.yml.
Levantar los contenedores:

Ejecuta el siguiente comando para levantar todos los contenedores definidos en tu archivo docker-compose.yml:

    terminal:
        docker-compose up -d

El -d indica que los contenedores se ejecutarán en segundo plano (modo "detached"), lo que te permite seguir utilizando la terminal para otros comandos.
### Verificar el estado de los contenedores:

Una vez que los contenedores estén levantados, verifica que todos estén corriendo correctamente con el siguiente comando:

    terminal:
        docker-compose ps

Este comando mostrará una lista de todos los contenedores, su estado, y los puertos en los que están operando. Asegúrate de que todos los contenedores necesarios estén en el estado "Up".
## Paso 2: Iniciar la aplicación Node.js
### Abrir la Terminal n°2:

Abre una segunda terminal en Visual Studio Code para poder ejecutar la aplicación Node.js sin detener los contenedores de Docker.
### Iniciar la aplicación con npm:

Asegúrate de estar en la carpeta del proyecto donde se encuentra el archivo package.json (generalmente la carpeta raíz del proyecto).
Ejecuta el siguiente comando para iniciar tu aplicación:

    terminal:
        npm start

Este comando ejecutará la aplicación Node.js en el entorno configurado en el archivo package.json. Usualmente, esto iniciará un servidor en un puerto específico (por ejemplo, http://localhost:3000).
## Paso 3: Acceder a PgAdmin para gestionar PostgreSQL
### Abrir PgAdmin en el navegador:

Abre tu navegador web y dirígete a la siguiente URL:

    navegador
        http://localhost:5050/

Este es el puerto donde el contenedor de PgAdmin está expuesto según la configuración de tu archivo docker-compose.yml.
### Iniciar sesión en PgAdmin:

Usa las siguientes credenciales para iniciar sesión:

    Correo electrónico: admin@mail.com
    Contraseña: root
    
Estas credenciales deberían estar definidas en tu archivo docker-compose.yml o ser parte de la configuración inicial de PgAdmin.

Una vez dentro, podrás gestionar tus bases de datos PostgreSQL utilizando la interfaz de PgAdmin.

