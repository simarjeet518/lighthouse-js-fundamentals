const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for(let x = 0; x < ingredients.length ; x++) {
  console.log(ingredients[x]);
}

let y= ingredients.length- 1;
while(y >= 0) {
  console.log(ingredients[y]);
  y--;
}