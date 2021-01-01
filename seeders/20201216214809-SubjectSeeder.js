'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Subjects', [{
      libel : "JAVA",
    }, {
      libel : "POO",
    }, {
      libel : "Analyse Numérique",
    }, {
      libel : "Anglais",
    },   {
      libel : "MERISE",
    },    {
      libel : "UML",
    },   {
      libel : "Analayse 1",
    },   {
      libel : "Analyse 2",
    },  {
      libel : "Analyse 3",
    },  {
      libel : "Analyse 4",
    },  
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('Subjects', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Subjects', null, {});
     */
  }
};
