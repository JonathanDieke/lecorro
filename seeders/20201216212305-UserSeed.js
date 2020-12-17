'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      return await queryInterface.bulkInsert('Users', [{
        register: '11039338P',
        email: 'admin@admin.com',
        name: 'jo',
        lastname: 'jo',
        pseudo: 'Jojo',
        password: '12345678',
        createdAt : new Date(),
        updatedAt : new Date(),
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.bulkDelete('Users', null, {});
     
  }
};
