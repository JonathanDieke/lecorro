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
      level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Levels',
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    } ,{
      timestamps : true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('studies');
  }
  
};
