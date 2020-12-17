'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Studies', [{
      libel : 'SIGL',
    }, {
      libel : 'TWIN',
    }, {
      libel : 'SRIT',
    }, {
      libel : 'RTEL',
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
      return await queryInterface.bulkDelete('Studies', null, {});
  }
};
