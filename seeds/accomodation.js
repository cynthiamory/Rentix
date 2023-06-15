
const { Accomodation} = require('../models');

const accomodationData = [
  {
    accomodation_place: '',
    accomodation_description: '',
    accomodation_location: '',
    price: 100,
  },
  {
    accomodation_place: '',
    accomodation_description: '',
    accomodation_location: '',
    price: 100,
  },
  {
    accomodation_place: '',
    accomodation_description: '',
    accomodation_location: '',
    price: 100,
  },
  {
    accomodation_place: '',
    accomodation_description: '',
    accomodation_location: '',
    price: 100,
  },
  {
    accomodation_place: '',
    accomodation_description: '',
    accomodation_location: '',
    price: 100,
  },

];

const seedAccomodation = () => Accomodation.bulkCreate(accomodationData);

module.exports = seedAccomodation;