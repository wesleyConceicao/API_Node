require('../../config/dotenv')();
require('../../config/sequelize');

const seedUsers = require('./UserSeeder');
const seedProduct = require('./ProductSeeder');
const seedOrder = require('./OrderSeeder');

(async () => {
  try {
    await seedProduct();
    await seedUsers();
    await seedOrder();
    
  } catch(err) { console.log(err) }
})();