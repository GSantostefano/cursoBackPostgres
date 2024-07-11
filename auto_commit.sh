#!/bin/bash

# Nombre del archivo a crear o modificar
FILENAME="hello_world.txt"

# Mensaje a escribir en el archivo
MESSAGE="//hola mundo"

# Crear o sobreescribir el archivo con el mensaje
echo "$MESSAGE" > $FILENAME

# Agregar el archivo y el script al staging area de git
git add $FILENAME auto_commit.sh

# Hacer commit con un mensaje predefinido
git commit -m "Añadido hola mundo al archivo $FILENAME y añadido auto_commit.sh"

# Hacer push al repositorio remoto en la rama principal
git push origin main
