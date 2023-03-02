'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const tagsSeed = [
      {
        name: 'sports',
        description: 'deportes en general',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'comida',
        description: 'restaurantes, recetas, tipos de comidas, ect ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'conciertos',
        description: 'bandas emergentes, visitas a cuidades, informacion',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'tecnologia',
        description: 'desarrollos tecnologicos y novedades',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'abastecimiento',
        description: 'productos de uso cotidiano, promociones',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]

    try {
      await queryInterface.bulkInsert('tags', tagsSeed)

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    const dataToDelete = [1,2,3,4,5]

    try {
      await queryInterface.bulkDelete('tags', { 
        id: dataToDelete 
      }, { transaction});

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};

