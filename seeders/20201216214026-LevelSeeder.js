'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.bulkInsert('Levels', [{
      libel : 'Licence 1', 
    }, {
      libel : 'Licence 2', 
    }, {
      libel : 'Licence 3', 
    }, {
      libel : 'Master 1', 
    }, {
      libel : 'Master 2', 
    },    
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return await queryInterface.bulkDelete('Levels', null, {});
  }
};
