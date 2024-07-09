// Importa la clase Sequelize del paquete 'sequelize'.
const { Sequelize } = require('sequelize');

// Importa la configuración desde el archivo config.
const { config } = require('./../config/config');

const setupModels = require('./../db/models/index');
// Codifica el nombre de usuario y la contraseña para que sean seguros para URL.
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// Crea la URI de conexión a la base de datos PostgreSQL usando las credenciales y detalles de la configuración.
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Crea una instancia de Sequelize con la URI de conexión y especifica el dialecto como 'postgres'.
// También habilita el registro (logging) de las consultas SQL ejecutadas.
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,
});
setupModels(sequelize);


sequelize.sync();

// Exporta la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación.
module.exports = sequelize;
