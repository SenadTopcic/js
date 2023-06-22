/*
Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
    let newArray = new Array;
  
    for(let i = 0; i<= arr.length; i=i+size)
    {
      newArray.push(arr.slice(i, i + size));
      if((i + size)>=arr.length)
        break;
    }
    //console.log(newArray);
    return newArray;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);