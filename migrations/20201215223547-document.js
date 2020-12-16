'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'subjects',
          key: 'id'
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      keywords: {
        allowNull: true,
        type: Sequelize.STRING,
      }
    }, {
      timestamps : true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('documents');
  }
};
