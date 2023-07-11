const people = [
    { name: 'Per', age: 40 },
    { name: 'Dejan', age: 40 },
    { name: 'Mek', age: 40 },
    { name: 'Michael', age: 30 },
    { name: 'David', age: 30 },
    { name: 'Marko', age: 20 },
    { name: 'Marks', age: 20 },
    { name: 'Jan', age: 20 }
];
const ages = people.reduce((groupedPeopleByAge, person) => {
    const age = person.age;
    if(groupedPeopleByAge[age] == null) 
        groupedPeopleByAge[age] = [];
    groupedPeopleByAge[age].push(person);
    return groupedPeopleByAge;
}, {});

console.log('ages :>> ', ages);
