
const { Catering} = require('../models');

const cateringData = [
  {
    catering_name: 'ABC',
    catering_description: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    catering_name: 'ABC',
    catering_description: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    catering_name: 'ABC',
    catering_description: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    catering_name: 'ABC',
    catering_description: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    catering_name: 'ABC',
    catering_description: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },

];

const seedCatering = () => Catering.bulkCreate(cateringData);

module.exports = seedCatering;