
const { Catering} = require('../models');

const cateringData = [
  {
    acatering_name: 'ABC',
    catering_desciption: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    acatering_name: 'ABC',
    catering_desciption: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    acatering_name: 'ABC',
    catering_desciption: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    acatering_name: 'ABC',
    catering_desciption: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },
  {
    acatering_name: 'ABC',
    catering_desciption: 'XYZ',
    menu: 'Chicken',
    price: 100,
    user_id: 1,
  },

];

const seedCatering = () => Catering.bulkCreate(cateringData);

module.exports = seedCatering;