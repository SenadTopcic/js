let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]
 let totalAmount = 0;
 for (let i = 0; i < orders.length; i++) {
     totalAmount += orders[i].amount;
 }
console.log(totalAmount);

let totalAmount2 = orders.reduce(
    (sum, order) => {
        console.log('sum :>> ', sum, order);
        return sum + order.amount;
    } 
    , 0);

console.log(totalAmount2);
