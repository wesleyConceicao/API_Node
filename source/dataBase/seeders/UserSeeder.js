const User = require("../../models/Usuario");
const faker = require('faker-br');

 const seedUser = async function () {

  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      name: faker.name.firstName(),
      surname: faker.surname.surname(),
      email: faker.internet.email(),
      password: faker.password.password(),
    
    });
  }
  try {
    await User.sync({ force: true });
    await User.bulkCreate(users);

  } catch (err) { console.log(err); }
}

module.exports = seedUser;