'use strict';
const rolesServices = require('../../services/roles.service')
const usersServices = require('../../services/users.service')
const uuid = require('uuid')
/** @type {import('sequelize-cli').Migration} */

const rolesService = new rolesServices()
const usersService = new usersServices()
module.exports = {
  async up (queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction()    
      try {
        const adminUser = await usersService.findUserByEmailOr404('rodrydanielmir@gmail.com')
        const adminUser2 = await usersService.findUserByEmailOr404('201808724@p.uapa.edu.do')
        

        const publicationsSeeds = [
          {
            id: uuid.v4(),
            tittle: "Cold Play en Buenos Aires",
            description: "informacion sobre Colplay y sus conciertos",
            content: "contenido acerca del evento",
            city_id: 1,
            user_id: adminUser.id,
            publications_types_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: uuid.v4(),
            tittle: "4x3 en walmart",
            description: "promocion de productos",
            content: "contenido acerca de la oferta",
            city_id: 2,
            user_id: adminUser2.id,
            publications_types_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: uuid.v4(),
            tittle: "fútbol 5",
            description: "Torneo de fútbol juvenil",
            content: "Inscripcion para equipos abierta",
            city_id: 3,
            user_id: adminUser.id,
            publications_types_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
          },
      
        ]
        await queryInterface.bulkInsert('publications', publicationsSeeds, { transaction })
        await transaction.commit()
      } catch (error) {
        console.log(error);
        await transaction.rollback()
        throw error
        
      }
    },


  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      const adminUser = await usersService.findUserByEmailOr404('example@academlo.com')
      const adminRole = await rolesService.findRoleByName('admin')

      await queryInterface.bulkDelete('publications', {
        user_id: {
          [Op.and]: [adminUser.id]
        },
        role_id: {
          [Op.and]: [adminRole.id]
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      console.log(error);
      await transaction.rollback()
      throw error
    }
  }
};
