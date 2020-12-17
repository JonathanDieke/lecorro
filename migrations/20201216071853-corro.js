
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('corros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      document_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'documents',
          key: 'id'
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
    }, { 
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('corros');
  }
};