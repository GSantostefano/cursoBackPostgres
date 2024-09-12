const fs = require('fs');
const path = require('path');

function listFiles(dir, level = 0) {
    let results = '';
    const indent = '  '.repeat(level);

    try {
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            // Omitir la carpeta node_modules
            if (file === 'node_modules' || file === 'mysql_data' || file === 'postgres_data' || file==='.git') {
                return;
            }

            if (stat && stat.isDirectory()) {
                const subDirectory = listFiles(filePath, level + 1);
                if (subDirectory.trim() !== '') {
                    results += `${indent}${file}/\n`;
                    results += subDirectory;
                }
            } else {
                results += `${indent}${file}\n`;
            }
        });
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err);
    }

    return results;
}

const dirToScan = './'; // Cambia esto al directorio que quieras escanear
const outputFilePath = 'estructura_directorio.txt';

const directoryStructure = listFiles(dirToScan);

fs.writeFileSync(outputFilePath, directoryStructure, 'utf8');

console.log(`Estructura de directorio guardada en ${outputFilePath}`);
