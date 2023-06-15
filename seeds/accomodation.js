
const { Accomodation } = require('../models');

const accomodationData =
  [
    {
      accommodation_place: "Cozy Cottage",
      accommodation_description: "A charming cottage surrounded by nature, perfect for a peaceful getaway.",
      accommodation_location: "Forestville, California",
      price: 1200,
      trending_id:1,
    },
    {
      accommodation_place: "Luxury Villa",
      accommodation_description: "A stunning villa with breathtaking ocean views, ideal for a luxurious vacation.",
      accommodation_location: "Maui, Hawaii",
      price: 5000,
      trending_id:2,
    },
    {
      accommodation_place: "Modern Apartment",
      accommodation_description: "A sleek and stylish apartment in the heart of the city, close to all amenities.",
      accommodation_location: "New York City, New York",
      price: 2000,
      trending_id:1,
    },
    {
      accommodation_place: "Rustic Cabin",
      accommodation_description: "A cozy cabin nestled in the mountains, offering a rustic and serene retreat.",
      accommodation_location: "Asheville, North Carolina",
      price: 1500,
      trending_id:1,
    },
    {
      accommodation_place: "Beachfront Bungalow",
      accommodation_description: "A charming bungalow just steps away from the sandy beach, perfect for relaxation.",
      accommodation_location: "Bali, Indonesia",
      price: 3000,
      trending_id:3,
    },
    {
      accommodation_place: "Country Farmhouse",
      accommodation_description: "A picturesque farmhouse surrounded by rolling hills and farmland, ideal for a countryside escape.",
      accommodation_location: "Tuscany, Italy",
      price: 2500,
      trending_id:4,
    },
    {
      accommodation_place: "Urban Loft",
      accommodation_description: "A trendy loft apartment in a vibrant neighborhood, with modern amenities and city views.",
      accommodation_location: "Berlin, Germany",
      price: 1800,
      trending_id:1,
    },
    {
      accommodation_place: "Mountain Chalet",
      accommodation_description: "A charming chalet tucked away in the mountains, offering breathtaking views and outdoor adventures.",
      accommodation_location: "Whistler, British Columbia",
      price: 3500,
      trending_id:2,
    },
    {
      accommodation_place: "Seaside Cottage",
      accommodation_description: "A quaint cottage by the sea, providing a peaceful and idyllic coastal getaway.",
      accommodation_location: "Cornwall, United Kingdom",
      price: 1200,
      trending_id:5,
    },
    {
      accommodation_place: "Historic Townhouse",
      accommodation_description: "A beautifully restored townhouse with rich history, located in a charming historic district.",
      accommodation_location: "Charleston, South Carolina",
      price: 2800,
      trending_id:5,
    },
    {
      accommodation_place: "Ski Resort Condo",
      accommodation_description: "A cozy condo nestled within a ski resort, offering convenient access to slopes and winter activities.",
      accommodation_location: "Aspen, Colorado",
      price: 4000,
      trending_id:4,
    },
    {
      accommodation_place: "Lakeview Retreat",
      accommodation_description: "A peaceful retreat overlooking a serene lake, perfect for nature lovers and relaxation.",
      accommodation_location: "Lake District, United Kingdom",
      price: 1800,
      trending_id:2,
    },
    {
      accommodation_place: "City Penthouse",
      accommodation_description: "A luxurious penthouse in the heart of the city, featuring stunning skyline views and upscale amenities.",
      accommodation_location: "Sydney, Australia",
      price: 8000,
      trending_id:3,
    },
    {
      accommodation_place: "Countryside Villa",
      accommodation_description: "A charming villa surrounded by picturesque countryside, offering tranquility and natural beauty.",
      accommodation_location: "Provence, France",
      price: 3000,
      trending_id:5,
    },
    {
      accommodation_place: "Tropical Resort",
      accommodation_description: "A tropical paradise resort with palm-fringed beaches and crystal-clear waters, perfect for a dream vacation.",
      accommodation_location: "Maldives",
      price: 7000,
      trending_id:1,
    },
    {
      accommodation_place: "Historic Castle",
      accommodation_description: "An enchanting castle with centuries of history, providing a unique and regal experience.",
      accommodation_location: "Edinburgh, Scotland",
      price: 4000,
      trending_id:4,
    },
    {
      accommodation_place: "Desert Retreat",
      accommodation_description: "A secluded retreat in the middle of the desert, offering serenity and breathtaking sunsets.",
      accommodation_location: "Sedona, Arizona",
      price: 2000,
      trending_id:5,
    },
    {
      accommodation_place: "Lakefront Cabin",
      accommodation_description: "A cozy cabin nestled on the shores of a peaceful lake, perfect for fishing and relaxation.",
      accommodation_location: "Lake Tahoe, California",
      price: 2500,
      trending_id:2,
    },
    {
      accommodation_place: "Treehouse Getaway",
      accommodation_description: "A unique treehouse retreat surrounded by lush forests, providing a magical and adventurous escape.",
      accommodation_location: "British Columbia, Canada",
      price: 1800,
      trending_id:2,
    },
    {
      accommodation_place: "Safari Lodge",
      accommodation_description: "A luxurious lodge in the heart of the savannah, offering thrilling wildlife encounters and unforgettable safaris.",
      accommodation_location: "Masai Mara, Kenya",
      price: 5000,
      trending_id:4,
    }
  ]


const seedAccomodation = () => Accomodation.bulkCreate(accomodationData);

module.exports = seedAccomodation;