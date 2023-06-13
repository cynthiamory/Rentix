
const { Transportation} = require('../models');

const transportationData = [
  {
    transportation_name: 'ABC',
    transportation_desciption: 'XYZ',
    capacity: 7,
    price: 100,
    user_id: 1,
  },
  {
    transportation_name: 'ABC',
    transportation_desciption: 'XYZ',
    capacity: 7,
    price: 100,
    user_id: 1,
  },
  {
    transportation_name: 'ABC',
    transportation_desciption: 'XYZ',
    capacity: 7,
    price: 100,
    user_id: 1,
  },
  {
    transportation_name: 'ABC',
    transportation_desciption: 'XYZ',
    capacity: 7,
    price: 100,
    user_id: 1,
  },
  {
    transportation_name: 'ABC',
    transportation_desciption: 'XYZ',
    capacity: 7,
    price: 100,
    user_id: 1,
  },
];

const seedTransportation = () => Transportation.bulkCreate(transpotationData);

module.exports = seedTransportation;