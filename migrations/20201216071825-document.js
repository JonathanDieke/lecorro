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
      path: {
        allowNull: false,
        type: Sequelize.STRING
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
      }, 
      originalName: {
        allowNull: true,
        type: Sequelize.STRING,
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

    }, {
      timestamps:true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('documents');
  }
  
};