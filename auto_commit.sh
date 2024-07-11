#!/bin/bash

# Nombre del archivo a crear o modificar
FILENAME="hello_world.txt"

# Generar un mensaje dinámico basado en la fecha y hora actual
MESSAGE="//hola mundo $(date)"

# Crear o sobreescribir el archivo con el mensaje
echo "$MESSAGE" > $FILENAME

# Agregar el archivo y el script al staging area de git
git add $FILENAME auto_commit.sh

# Verificar si hay cambios para evitar commits vacíos
if git diff-index --quiet HEAD --; then
    echo "No hay cambios para commit."
else
    # Hacer commit con un mensaje predefinido
    git commit -m "Actualizado hello_world.txt con mensaje dinámico y actualizado auto_commit.sh"

    # Hacer push al repositorio remoto en la rama principal
    git push origin main
fi
