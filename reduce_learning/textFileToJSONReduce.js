//We need from datas from the file data.txt to create array of objects with the following structure:
/*
{
'mark johansson' : [
    {name: 'waffle iron', price: '80', quantity: '2'},
    {name: 'blender', price: '200', quantity: '1'},
    {name: 'knife', price: '10', quantity: '4'}
    ],
'Nikita Smith' : [
    {name: 'waffle iron', price: '80', quantity: '1'},
    {name: 'knife', price: '10', quantity: '2'},
    {name: 'pot', price: '20', quantity: '3'}
    ]
}
*/
//fs.readFileSync('./data.txt', 'utf-8', (err, data) => {

import { readFileSync } from 'fs';


let output = readFileSync('./data.txt', 'utf-8');
output = output.trim();
output = output.split('\n')
output = output.map(line => line.split('\t'));
output = output.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    
    return customers
},{});

console.log("output", JSON.stringify(output, null, 2));