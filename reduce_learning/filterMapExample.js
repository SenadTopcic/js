let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }

]
//filter
let dogs = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
    dogs.push(animals[i]);
}
let dogs2 = animals.filter( (animal) => animal.species === 'dog');

console.log(dogs2);
console.log(dogs);

let IsDogs = (animal) => animal.species === 'dog';
let dogs3 = animals.filter(IsDogs);
console.log(dogs3);

// Map

//for solutions
let names = [];
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
//map solutions
let names2 = animals.map(animal => `${animal.name} is a ${animal.species}` );
console.log(names);
console.log(names2);

