'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('level_study', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      study_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    } ,{
      timestamps : true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('level_study');
  }
};
