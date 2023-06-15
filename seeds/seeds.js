
// PURPOSE: TO SEED THE DATABASE WITH DATA
const sequelize = require('../config/connection');
const seedTrending = require('./trending');
const seedAccomodation = require('./accomodation');
const seedCatering = require('./catering');
const seedTransportation = require('./transportation');

// IMPORT SEQUELIZE CONNECTION

// PURPOSE: TO SEED THE DATABASE WITH DATA
const seedAll = async () => {
  try{
  await sequelize.sync({ force: false });
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
}catch (error) {
  console.error('Seeding failed:', error);
  process.exit(1);
};
}
// CALL THE FUNCTION
seedAll();