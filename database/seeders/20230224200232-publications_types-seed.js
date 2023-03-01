'use strict';
const { Op } = require("sequelize");
const {v4: uuid4} = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const publicationsTypesSeeds = [
      {
        id: uuid.v4(),
        name: 'Marcas y tiendas',
        description: 'Productos, bienes y servicios',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuid.v4(),
        name: 'Artistas y conciertos',
        description: 'entretenimiento general',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuid.v4(),
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
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.bulkDelete(
        'publications_types',
        {
          username: {
            [Op.or]: ['Marcas y tiendas'],
            [Op.or]: ['Artistas y conciertos'],
            [Op.or]: ['Torneos']
          },
        },
        { transaction }
      )

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
};
