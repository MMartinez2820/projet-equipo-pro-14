'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     const transaction = await queryInterface.sequelize.transaction()
      
     const citiesSeeds = [
      {
        name: 'la Plata',
        state_id: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Cordoba capital',
        state_id: '2',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Rosario',
        state_id: '3',
        created_at: new Date(),
        updated_at: new Date()
      }
     ]
     try {
      await queryInterface.bulkInsert('cities', citiesSeeds, { transaction })

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
      await queryInterface.bulkDelete('cities', { 
        id: dataToDelete 
      }, { transaction});

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};
