const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
];

//tasks done with forEach
let totalPrice0 = 0;
items.forEach((item) => {
    totalPrice0 += item.price;
});

//task done with reduce
//reuce takes a 2 parameters: a callback function and an initial value as 0
//the callback function takes 2 parameters: the accumulator and the current item
//the accumulator is the value that is returned each time the callback function is called return ...
const totalPrice1 =  items.reduce(
    (total, item) => {
        console.log('total :>> ', total);
        console.log('item price :>> ', item.price);
        return total + item.price;
}, 0)
console.log('totalPrice0 :>> ', totalPrice0);
console.log('totalPrice1 :>> ', totalPrice1);