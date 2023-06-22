/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
You should not mutate arr.
*/

/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
You should not mutate arr.
*/

function bouncer(arr) {
  let newArray = new Array;
  newArray = [...arr];
  let lenArr = arr.length;
  for(let i = 0; i < lenArr; i++)
  {
    try {
      //console.log(1.toString()=== "NaN");
      if(isNaN(newArray[i]) && newArray[i].toString() === "NaN")
      {
        console.log("N-a-N");
        newArray.splice(i,1);
        i = i-1;
        lenArr = lenArr - 1;
      }
      else if(newArray[i] === null || newArray[i] === undefined ||newArray[i] ===0 )
      {
        newArray.splice(i,1);
        i = i-1;
        lenArr = lenArr - 1;
      }
      else if(newArray[i].length === 0 )
      {
        newArray.splice(i,1);
        i = i-1;
        lenArr = lenArr - 1;
      }
      else if (typeof newArray[i] !== "string" && typeof newArray[i] !== "number")
      {
        newArray.splice(i,1);
        i = i-1;
        lenArr = lenArr -1;
      }
    } catch (error) {
      if(newArray[i] === null || newArray[i] === undefined )
      {
        newArray.splice(i,1);
        i = i-1;
        lenArr = lenArr - 1;
      }
      else if(newArray[i].length === 0 )
      {
        newArray.splice(i,1);
        i = i-1;
        lenArr = lenArr - 1;
      }
      else if (typeof newArray[i] !== "string" && typeof newArray[i] !== "number")
      {
        newArray.splice(i,1);
        i = i-1;
        lenArr = lenArr -1;
      }
    }
  }
  return newArray;
}
//console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
//console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
//console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]));