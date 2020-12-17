'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return await queryInterface.bulkInsert('Documents', [{
      subject_id: 1,
      path: 'path_to_document1',
      title: 'Examen de Analyse 1',
      description: 'Sujet Examen d\'analyse 1 2019-2020',
      keywords: 'examen, analyse 1, 2020',
   },
   {
    subject_id: 2,
    path: 'path_to_document2',
    title: 'Examen de Analyse 2',
    description: 'Sujet Examen d\'analyse 2 2018-2019',
    keywords: 'examen, analyse 2, 2018',
 },
 {
  subject_id: 3,
  path: 'path_to_document3',
  title: 'Examen de Analyse 3',
  description: 'Sujet Examen d\'analyse 3 2017-2018',
  keywords: 'examen, analyse 3, 2018',
},
], {});

  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('Documents', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
