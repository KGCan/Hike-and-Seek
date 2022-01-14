const seedAnimal = require('./animal-seeds');
const seedTrail = require('./trail-seeds');
// const seedCity = require('./city-seeds');
const seedUser = require('./user-seeds');
const seedTrailAnimal = require('./trailanimal-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedTrailAnimal();
  console.log('\n----- TrailAnimal SEEDED -----\n');

  await seedTrail();
  console.log('\n----- Trails SEEDED -----\n');

  await seedAnimal();
  console.log('\n----- Animals SEEDED -----\n');




  // await seedCity();
  // console.log('\n----- Cities SEEDED -----\n');

 // await seedUser();
  //console.log('\n----- User SEEDED -----\n');

  process.exit(0);
};

seedAll();