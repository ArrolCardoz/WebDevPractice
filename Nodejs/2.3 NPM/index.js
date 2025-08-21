import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

import superhero from "superhero-name-library";

var heroName = superhero.random();
console.log(`My Hero name is ${heroName}!!!.`);

import { randomSuperhero } from "superheroes";

heroName = randomSuperhero();
console.log(`My Hero name is ${heroName}!!!.`);
