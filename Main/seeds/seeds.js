//CYNTHIA WAS HERE :)

// PURPOSE: TO SEED THE DATABASE WITH DATA
const seedTrending = require('./trending-seeds');
const seedVenue = require('./venue-seeds');
const seedCatering = require('./catering-seeds');
const seedProductTags = require('./product-tag-seeds');

// IMPORT SEQUELIZE CONNECTION
const sequelize = require('../config/connection');

// PURPOSE: TO SEED THE DATABASE WITH DATA
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedTrending();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // await seedUser();
  await seedVenue();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedCatering();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

// CALL THE FUNCTION
seedAll();