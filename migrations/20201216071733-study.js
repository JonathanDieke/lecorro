'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('studies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      libel: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    } ,{
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('studies');
  }
  
};