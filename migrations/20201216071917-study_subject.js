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
        references: {
          model: 'studies',
          key: 'id'
        }
      },
      subject_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'subjects',
          key: 'id'
        }
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue : new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue : new Date()
      }

    } ,{ 
      timestamps:true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('study_subject');
  }
};
