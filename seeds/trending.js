
const { Trending } = require('../models');

const trendingData = [
  {
    trending_name: 'something1',
  },
  {
    trending_name: 'something2',
  },
  {
    trending_name: 'something3',
  },
  {
    trending_name: 'something4',
  },
  {
    trending_name: 'something5',
  },
];

const seedTrending = () => Trending.bulkCreate(trendingData);

module.exports = seedTrending;