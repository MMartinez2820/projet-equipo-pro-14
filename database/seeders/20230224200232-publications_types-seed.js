'use strict';
const { Op } = require("sequelize");
const {v4: uuid4} = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const publicationsTypesSeeds = [
      {
        name: 'Marcas y tiendas',
        description: 'Productos, bienes y servicios',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Artistas y conciertos',
        description: 'entretenimiento general',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Torneos',
        description: 'deportes generales',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]

    try {
      await queryInterface.bulkInsert('publications_types', publicationsTypesSeeds , { transaction })

      await transaction.commit()
    } catch (error) {
      console.log(error);
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    const dataToDelete = [1,2,3]

    try {
      await queryInterface.bulkDelete('publications_types', { 
        id: dataToDelete 
      }, { transaction});

      await transaction.commit()
    } catch (error) {
      console.log(error);
      await transaction.rollback()
      throw error
    }
  },
};
