//CYNTHIA WAS HERE :)

// PURPOSE: TO SEED THE DATABASE WITH DATA
const seedTrending = require('./trending-seeds');
const seedAccomodation = require('./accomodation-seeds');
const seedCatering = require('./catering-seeds');
const seedTransportation = require('./transportation-seeds');

// IMPORT SEQUELIZE CONNECTION
const sequelize = require('../config/connection');

// PURPOSE: TO SEED THE DATABASE WITH DATA
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedTrending();
  console.log('\n----- Trending SEEDED -----\n');

  // await seedUser();
  await seedAccomodation();
  console.log('\n----- Accomodation SEEDED -----\n');

  await seedCatering();
  console.log('\n----- Catering SEEDED -----\n');

  await seedTransportation();
  console.log('\n----- Transportation TAGS SEEDED -----\n');

  process.exit(0);
};

// CALL THE FUNCTION
seedAll();