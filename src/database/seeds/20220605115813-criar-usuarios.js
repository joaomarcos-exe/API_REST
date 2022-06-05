'use strict';
const bcryptjs = require('bcryptjs')
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [{
       nome: 'John Doe',
       email: 'john@gmail.com',
       password_hash: await bcryptjs.hash('102030', 8),
       created_at: new Date(),
       updated_at: new Date()
     }], {});
    
  },

  async down () {
    
  }
};
