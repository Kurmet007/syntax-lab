// bare with me i didnt have the clone copy to paste down i may be missing things

//exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map(function(num) {
  return num * 2;
});

console.log(numsTimesTwo);


//exercise 2

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);



//exercise 3

const car = {
  make: 'Audi',
  model: 'Q5',
};

const { make, model } = car;

console.log(make);
console.log(model);



//exercise 4

const morePizzaToppings = ['Cheese', 'Sauce'];

const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log(uncontroversialPizzaToppings);


//exercise 5

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

const myCar = { ...anotherCar };

myCar.make = 'chevy';
myCar.model = 'silverado 2500';

console.log(anotherCar);
console.log(myCar);


//exercise 6

const propertyName = 'username';

const userProfile = {
  [propertyName]: 'adrian123',
};

console.log(userProfile);


//exercise 7

//completed

//exercise 8

function describeAnimal(noun = 'cat', adjective = 'orange') {
  console.log(`The ${noun} is ${adjective}.`);
}

describeAnimal();
describeAnimal('dog', 'fluffy');

//Exercise 9

const pizza = 'tasty';
pizza === 'tasty' ? console.log('yum') : console.log('yuck');


//Exercise 10


const localLangConfig = null;

const lang = localLangConfig || 'en';

console.log(lang);

//i looked this one up i didnt understand it to well
