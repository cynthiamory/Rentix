
const { Trending } = require('../models');

const trendingData = [
  {
    trending_title: '',
    trending_description: '',
    user_id: 1,
  },
  {
    trending_title: '',
    trending_description: '',
    user_id: 2,
  },
  {
    trending_title: '',
    trending_description: '',
    user_id: 3,
  },
  {
    trending_title: '',
    trending_description: '',
    user_id: 4,
  },
  {
    trending_title: '',
    trending_description: '',
    user_id: 5,
  },

];

const seedTrending = () => Trending.bulkCreate(trendingData);

module.exports = seedTrending;