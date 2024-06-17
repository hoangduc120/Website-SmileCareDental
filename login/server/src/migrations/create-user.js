'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING,
        defaultValue: 'NULL'
      },
      username: {
        type: Sequelize.STRING,
        defaultValue: 'USER'
      },
      password: {
        type: Sequelize.STRING,
        defaultValue: 'NULL'
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'USER'
      },
      typeLogin: {
        type: Sequelize.STRING
      },
      tokenLogin: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      avatarUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};