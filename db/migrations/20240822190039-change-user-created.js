'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    // Renombrar la columna 'create_at' a 'created_at'
    await queryInterface.renameColumn(USER_TABLE, 'create_at', 'created_at');
  },

  async down (queryInterface, Sequelize) {
    // Revertir el cambio renombrando 'created_at' de vuelta a 'create_at'
    await queryInterface.renameColumn(USER_TABLE, 'created_at', 'create_at');
  }
};