function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pickPizza = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"])
console.log(pickPizza);

var pickPizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])
console.log(pickPizza2);

var pickPizza3 = pizzaOven("Thin crust", "Garlic Parmesan", ["Pepper Jack, Swiss"], ["Premium Chicken, Green Peppers", "Banana Peppers", "Olives", "Onions"])
console.log(pickPizza3);

var pickPizza4 = pizzaOven("deep dish", "Traditional", ["Cheddar", "Swiss"], ["Hamburger Meat", "Bacon", "Lettuce","Tomatoes", "Onions", "Pickles"])
console.log(pickPizza4);




// 
// 
// 



function randomPizza(pizzaSelector){
    var whichPizza = ["pizza1", "pizza2", "pizza3", "pizza4", "pizza5", "pizza6", "pizza7", "pizza8", "pizza9", "pizza10", "pizza11", "pizza12", "pizza13", "pizza14", "pizza15","pizza16","pizza17","pizza18","pizza19","pizza20"]
    var temp = Math.random() * 20;
    pizzaSelector = Math.floor(temp);
    return whichPizza[pizzaSelector];
}

console.log(randomPizza());