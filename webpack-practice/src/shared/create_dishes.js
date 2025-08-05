class DishClass {
  constructor(name, price, ...ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }
}

const createDishesList = (type, ...dishes) => {
  const dishesContent = document.createElement("div");
  dishesContent.classList.add("dishes-contents");

  const dishesType = document.createElement("h3");
  dishesType.classList.add("dishes-type");
  dishesType.textContent = type;
  dishesContent.appendChild(dishesType);

  dishes.forEach((dish) => {
    const dishContent = document.createElement("div");
    dishContent.classList.add("dish-content");

    const dishNamePrice = document.createElement("div");
    dishNamePrice.classList.add("dish-name-price");

    const dishName = document.createElement("h4");
    dishName.classList.add("dish-name");
    dishName.textContent = dish.name;

    const dishPrice = document.createElement("h4");
    dishPrice.classList.add("dish-price");
    dishPrice.textContent = dish.price;

    const dotFill = document.createElement("span");
    dotFill.classList.add("dot-fill");

    dishNamePrice.appendChild(dishName);
    dishNamePrice.appendChild(dotFill);
    dishNamePrice.appendChild(dishPrice);
    dishContent.appendChild(dishNamePrice);

    const dishIngredient = document.createElement("p");
    dishIngredient.classList.add("dish-ing");
    dishIngredient.textContent = (dish.ingredients || []).join(" / ");
    dishContent.appendChild(dishIngredient);

    dishesContent.appendChild(dishContent);
  });

  return dishesContent;
};

export { DishClass, createDishesList };
