const Role = require("../../models/Pedido");

 const seedRoles = async function () {

  const roles = [
    { "name": "admin" },
    { "name": "promoter" },
    { "name": "user" },
  ];

  try {
    await Role.sync({ force: true });
    await Role.bulkCreate(roles);

  } catch (err) { console.log(err); }
}

module.exports = seedOrder;