
const { Transportation} = require('../models');

const transportationData = [
  {
    transportation_name: "Luxury Sedan",
    transportation_description: "A stylish and elegant luxury sedan for comfortable and luxurious transportation.",
    capacity: 4,
    price: 150,

    trending_id: 1,
    filename:"homepage.png"
 


  },
  {
    transportation_name: "Stretch Limousine",
    transportation_description: "A luxurious and spacious stretch limousine with plush interiors and entertainment options.",
    capacity: 10,
    price: 250,
      trending_id: 2,
      filename:"homepage.png"
  },
  {
    transportation_name: "SUV",
    transportation_description: "A versatile and rugged SUV with ample space and all-terrain capabilities.",
    capacity: 5,
    price: 120,
      trending_id: 3,
      filename:"homepage.png"
  },
  {
    transportation_name: "Party Bus",
    transportation_description: "A party bus equipped with dance floors, music systems, and party lighting for a fun and memorable experience.",
    capacity: 20,
    price: 400,
      trending_id: 4,

      filename:"homepage.png"
  },
  {
    transportation_name: "Classic Car",
    transportation_description: "A classic car that exudes elegance and nostalgia, perfect for special occasions and weddings.",
    capacity: 2,
    price: 200,
      trending_id: 5,
      filename:"homepage.png"
  },
  {
    transportation_name: "Van",
    transportation_description: "A spacious van with comfortable seating and ample storage for group transportation and cargo.",
    capacity: 8,
    price: 180,
      trending_id: 6,
      filename:"homepage.png"
  },
  {
    transportation_name: "Sports Car",
    transportation_description: "A sleek and high-performance sports car that delivers an exhilarating driving experience.",
    capacity: 2,
    price: 300,
      trending_id: 7,
      filename:"homepage.png"
  },
  {
    transportation_name: "Mini Cooper",
    transportation_description: "A compact and stylish Mini Cooper for zipping through the city streets with ease.",
    capacity: 4,
    price: 100,
      trending_id: 8,
      filename:"homepage.png"
  },
  {
    transportation_name: "Motorcycle",
    transportation_description: "A powerful motorcycle for riders seeking an adventurous and thrilling mode of transportation.",
    capacity: 1,
    price: 80,
      trending_id: 9,
      filename:"homepage.png"
  },
  {
    transportation_name: "Executive Van",
    transportation_description: "A luxurious and executive-style van with comfortable seating and premium amenities.",
    capacity: 6,
    price: 220,
      trending_id: 10,
      filename:"homepage.png"
  },
  {
    transportation_name: "Convertible Car",
    transportation_description: "A stylish and convertible car that lets you enjoy the open road and the wind in your hair.",
    capacity: 2,
    price: 250,
      trending_id: 11,
      filename:"homepage.png"
  },
  {
    transportation_name: "Airport Shuttle",
    transportation_description: "A reliable and convenient airport shuttle service for seamless transportation to and from the airport.",
    capacity: 12,
    price: 90,
      trending_id: 12,
      filename:"homepage.png"
  },
  {
    transportation_name: "Vintage Car",
    transportation_description: "A beautifully restored vintage car that adds a touch of nostalgia and charm to any event.",
    capacity: 2,
    price: 180,
      trending_id: 13,
      filename:"homepage.png"
  },
  {
    transportation_name: "Luxury SUV",
    transportation_description: "A luxurious and spacious SUV with advanced features and superior comfort.",
    capacity: 5,
    price: 200,
      trending_id: 14,
      filename:"homepage.png"
  },
  {
    transportation_name: "Hummer Limousine",
    transportation_description: "A massive and extravagant Hummer limousine with a VIP party atmosphere and luxurious amenities.",
    capacity: 16,
    price: 500,
      trending_id: 15,
      filename:"homepage.png"
  },
  {
    transportation_name: "Electric Car",
    transportation_description: "An eco-friendly electric car that combines sustainability with modern design and technology.",
    capacity: 4,
    price: 150,
      trending_id: 16,
      filename:"homepage.png"
  },
  {
    transportation_name: "Motorhome",
    transportation_description: "A fully-equipped motorhome for comfortable and flexible road trips and camping adventures.",
    capacity: 6,
    price: 300,
      trending_id: 17,
      filename:"homepage.png"
  },
  {
    transportation_name: "Luxury Coach",
    transportation_description: "A luxurious coach with spacious seating, entertainment systems, and onboard amenities for long-distance travel.",
    capacity: 40,
    price: 800,
      trending_id: 18,
      filename:"homepage.png"
  },
  {
    transportation_name: "Vintage Bus",
    transportation_description: "A retro-style vintage bus that offers a unique and nostalgic transportation experience.",
    capacity: 30,
    price: 400,
      trending_id: 19,
      filename:"homepage.png"
  },
  {
    transportation_name: "Town Car",
    transportation_description: "A comfortable and elegant town car for professional and stylish transportation.",
    capacity: 4,
    price: 120,
      trending_id: 20,
      filename:"homepage.png"
  }
]


const seedTransportation = () => Transportation.bulkCreate(transportationData);

module.exports = seedTransportation;