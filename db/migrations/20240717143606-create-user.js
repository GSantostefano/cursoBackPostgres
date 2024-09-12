'use strict';

/** @type {import('sequelize-cli').Migration} */
const {UserSchema, USER_TABLE} = require ('./../models/user.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(USER_TABLE);
  }
};

// 'use strict';

// const { UserSchema, USER_TABLE } = require('./../models/user.model');

// module.exports = {
//   up: async (queryInterface) => {
//     await queryInterface.createTable(USER_TABLE, UserSchema);
//   },

//   down: async (queryInterface) => {
//     await queryInterface.drop(USER_TABLE);
//   }
// };