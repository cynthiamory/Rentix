
const { Catering} = require('../models');

const cateringData = [
  {
    dish_name: "Chicken Curry",
    dish_description: "A flavorful and aromatic chicken curry with a perfect blend of spices.",
    menu: "Main Course",
    price: 100,
    user_id: 1
  },
  {
    dish_name: "Vegetable Stir-Fry",
    dish_description: "A healthy and colorful stir-fry with a variety of fresh vegetables.",
    menu: "Vegetarian",
    price: 80,
    user_id: 2
  },
  {
    dish_name: "Beef Stroganoff",
    dish_description: "Tender beef cooked in a creamy mushroom sauce, served with pasta.",
    menu: "Main Course",
    price: 120,
    user_id: 3
  },
  {
    dish_name: "Caprese Salad",
    dish_description: "A refreshing salad with fresh tomatoes, mozzarella, and basil, drizzled with balsamic glaze.",
    menu: "Appetizer",
    price: 60,
    user_id: 4
  },
  {
    dish_name: "Chocolate Mousse",
    dish_description: "A decadent and silky smooth chocolate mousse, perfect for chocolate lovers.",
    menu: "Dessert",
    price: 70,
    user_id: 5
  },
  {
    dish_name: "Mediterranean Pasta",
    dish_description: "Penne pasta tossed with sun-dried tomatoes, olives, feta cheese, and herbs.",
    menu: "Main Course",
    price: 90,
    user_id: 6
  },
  {
    dish_name: "Spinach and Feta Stuffed Mushrooms",
    dish_description: "Mushroom caps filled with a savory mixture of spinach, feta cheese, and breadcrumbs.",
    menu: "Appetizer",
    price: 75,
    user_id: 7
  },
  {
    dish_name: "Lemon Garlic Shrimp",
    dish_description: "Juicy shrimp sautéed with garlic, lemon, and herbs, served with steamed rice.",
    menu: "Seafood",
    price: 150,
    user_id: 8
  },
  {
    dish_name: "Roasted Vegetable Tart",
    dish_description: "A savory tart filled with roasted vegetables, goat cheese, and fresh herbs.",
    menu: "Vegetarian",
    price: 100,
    user_id: 9
  },
  {
    dish_name: "Tiramisu",
    dish_description: "A classic Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone.",
    menu: "Dessert",
    price: 80,
    user_id: 10
  }
]


const seedCatering = () => Catering.bulkCreate(cateringData);

module.exports = seedCatering;