'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      register : {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING, 
        unique : true
      },
      name : {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname : {
        allowNull: false,
        type: Sequelize.STRING
      },
      pseudo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // bio: {
      //   allowNull: true,
      //   type: Sequelize.STRING
      // },
      isAdmin: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue : false
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
    return queryInterface.dropTable('Users');
  }
};