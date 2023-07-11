const numbers = [15, -51, 52, 43];

const sum = numbers.reduce((accumulator, currentValue, index, array) => {
    console.log(index, array[index]);
    return accumulator + currentValue;
}, 0);
console.log('sum :>> ', sum);