
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
        references: {
          model: 'levels',
          key: 'id'
        }
      },
      study_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'studies',
          key: 'id'
        }
      }
    } ,{ 
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('level_study');
  }
};
