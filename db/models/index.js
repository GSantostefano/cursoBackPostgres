

const { User, UserSchema } = require('./user.model');
const { Rango, RangoSchema } = require('./rango.model');
const { LibroDiario, LibroDiarioSchema } = require('./LibroDiario.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Rango.init(RangoSchema, Rango.config(sequelize));
  LibroDiario.init(LibroDiarioSchema, LibroDiario.config(sequelize));
}
module.exports = setupModels;
