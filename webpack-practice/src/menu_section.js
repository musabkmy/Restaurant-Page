import { DishClass, createDishesList } from "./shared/create_dishes";
export const menuSection = document.createElement("section");
menuSection.classList.add("menu");

const menuTop = document.createElement("div");
menuTop.classList.add("menu-heading");

const menuHeading = document.createElement("h1");
menuHeading.classList.add("main-title");
menuHeading.textContent = "Our Menus";

menuTop.appendChild(menuHeading);
menuSection.appendChild(menuTop);
///////

const appetizerDishes = [
//   new DishClass("Bruschetta", "$6", "Tomato", "Basil", "Garlic", "Toasted Bread"),
  new DishClass("Stuffed Mushrooms", "$7", "Mushroom", "Parmesan", "Garlic", "Breadcrumbs"),
  new DishClass("Garlic Bread", "$5", "Bread", "Garlic", "Butter", "Parsley"),
  new DishClass("Caprese Salad", "$7", "Tomato", "Mozzarella", "Basil", "Balsamic"),
  new DishClass("Fried Calamari", "$8", "Calamari", "Flour", "Lemon", "Aioli"),
  new DishClass("Spinach Dip", "$6", "Spinach", "Cream Cheese", "Onion", "Tortilla Chips"),
//   new DishClass("Deviled Eggs", "$4", "Eggs", "Mustard", "Paprika", "Mayonnaise"),
  new DishClass("Mini Tacos", "$7", "Tortilla", "Beef", "Cheddar", "Salsa"),
];
const appetizers = createDishesList("appetizer", ...appetizerDishes);

const mainDishes = [
//   new DishClass("Grilled Salmon", "$18", "Salmon", "Lemon", "Dill", "Garlic Butter"),
  new DishClass("Spaghetti Bolognese", "$14", "Pasta", "Beef", "Tomato Sauce", "Parmesan"),
  new DishClass("Chicken Alfredo", "$15", "Fettuccine", "Chicken", "Cream", "Parmesan"),
];
const main = createDishesList("main dish", ...mainDishes);

const dessertsDishes = [
  new DishClass("Tiramisu", "$7", "Mascarpone", "Espresso", "Ladyfingers", "Cocoa Powder"),
//   new DishClass("Chocolate Lava Cake", "$8", "Dark Chocolate", "Eggs", "Butter", "Flour"),
  new DishClass("Cheesecake", "$6", "Cream Cheese", "Graham Crust", "Vanilla", "Strawberries"),
  new DishClass("Apple Pie", "$5", "Apples", "Cinnamon", "Pastry", "Sugar"),
//   new DishClass("Panna Cotta", "$6", "Cream", "Vanilla", "Gelatin", "Berry Sauce"),
];
const dessert = createDishesList("dessert", ...dessertsDishes);

const subMenuContent1 = document.createElement("div");
const subMenuContent2 = document.createElement("div");
subMenuContent2.classList.add("sub-menu-content");
const menuContent = document.createElement("div");
menuContent.classList.add("menu-content");

subMenuContent1.appendChild(appetizers);
subMenuContent2.appendChild(main);
subMenuContent2.appendChild(dessert);
menuContent.appendChild(subMenuContent1);
menuContent.appendChild(subMenuContent2);

menuSection.appendChild(menuContent);
