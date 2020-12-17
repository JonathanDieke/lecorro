'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return await queryInterface.bulkInsert('Corros', [{
      document_id: '1',
      description: 'Corro Examen d\'analyse 1 2019-2020',
   },
   {
    document_id: '2',
    description: 'Corro Examen d\'analyse 2 2018-2019',
 },
 {
  document_id: '1',
  description: 'Corro Examen d\'analyse 3 2017-2018',
},
], {});

  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('Corros', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
