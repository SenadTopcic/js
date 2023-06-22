/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    let capitalizeStr = "";
    capitalizeStr = str.toLowerCase();
    let wordArray = capitalizeStr.split(" ");
    let capArray = new Array;
    for (let index = 0; index < wordArray.length; index++) 
    {
        capitalizeStr = "";
        for (let j = 0; j < wordArray[index].length; j++) 
        {
            if(j == 0)
                capitalizeStr +=  wordArray[index][j].toLocaleUpperCase();
            else
            capitalizeStr +=  wordArray[index][j];  
        }
        capArray.push(capitalizeStr);
    }
    capitalizeStr = capArray.join(" ");
    console.log(capitalizeStr.length);
    return capitalizeStr;
}

console.log(titleCase("I'm a little tea pot"));