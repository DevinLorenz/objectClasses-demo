//creating new object for a person with firstName, lastName, and age.

let person = {
  firstName: `Devin`,
  lastName: `Lorenz`,
  age: 21,
  likes: [`make jokes`, `play video games`, `sleep`],
};

//using dot notation access the firstName

console.log(person.firstName);

//using bracket notation, access lastName.

console.log(person[`lastName`]);

//using dot notation to access 2nd like

console.log(`Devin likes to ${person.likes[1]}`);

//object destructuring

let meal = {
  appetizer: `Mozzy Sticks`,
  entree: `Chicken Tenders and French Fries`,
  dessert: `Black-Tie Mousse Cake`,
  drink: `Milk`,
};

//using object destructuring, destructure the dessert property off of the meal object.

let {dessert,drink:bestDrinkEver} = meal;
// let dessert = meal.dessert
//let drink = meal.dessert

console.log(dessert);

console.log(`${dessert} goes well with ${bestDrinkEver}!`);

//lets destructure the remaining items in the same declaration

let { appetizer, entree } = meal;

console.log(`I'll have the ${appetizer} first and then ${entree} as my meal.`);

console.log()

//destructure the drink and rename it.

// let { drink:bestDrinkEver} = meal
// console.log(`I'll get that with a glass of ${bestDrinkEver}.`)
//console.log(drink)

//looping using a for-in loop

//lets loop over our person object and console.log() all of the keys

//this will print the key names.
for(key in person) {
    console.log(key)
}

//this will print the key's values.
for(key in person){
    console.log(person[key])
}

console.log()

//lets add some properties

//lets add a job key to the person object with a value of choice using dot notation

person.job = 'Software Developer';

//lets add pets (array) using bracekt notation.

person[`pets`] = [`cat`,`duck`]
console.log(person)

console.log()

//Create and delete from an array object

let teams = {
    teamOne: [`Ryan`,`Patrick`,`Devin`,`Devin`],
    teamTwo: [`Jillian`,`Jacob`,`Emily`,`Lana`],
    teamThree: [`Hamzah`,`Isha`,`Teryn`,`Rose`]
}

// now delete teamOne.

delete teams.teamOne
console.log(teams)

console.log()

//Classes
//lets add a greeting method/function to our class to greet the user from the dog.

class Dog {
    constructor(name,breed,age) {
        this.name = name,
        this.breed = breed,
        this.age = age
    }

    greeting() {
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}!`)
    }
}

let porter = new Dog(`Porter`,`Brittany Spaniel`,7)

console.log(porter)

let cooper = new Dog(`Cooper`,`Austrailian Shepard`,3)

console.log(cooper)

console.log()

porter.greeting()
cooper.greeting()


//now we can loop over our instance of dog

for(key in porter){
    console.log(porter[key])
}

//extending classes

class Puppy extends Dog {
    constructor(name,breed,age,trainingLevel){
        super(name,breed,age)

        this.trainingLevel = trainingLevel
    }

    levelUP(num) {
        this.trainingLevel = num
    }
}



let scoob = new Puppy('Scooby-Doo','Great-Dane',1,3)


scoob.greeting()
scoob.levelUP(5)
// porter.levelUP(1)
console.log(scoob)