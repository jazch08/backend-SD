'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 800; i <=1201; i++) {  
      await queryInterface.bulkInsert('productos', [{
          nombre: 'Producto '+i,  
          cantidad: 10+i,  
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});  

  }
};
