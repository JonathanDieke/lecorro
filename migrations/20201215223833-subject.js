'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subject', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      libel: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    } ,{
      timestamps : true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('subject');
  }
};
