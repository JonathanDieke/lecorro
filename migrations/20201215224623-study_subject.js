'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('study_subject', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      study_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      subject_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    } ,{
      timestamps : true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('study_subject');
  }
};
