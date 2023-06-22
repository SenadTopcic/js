/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    if (num < 0)
        return "";
    let result = "";

    for (let repetition = 0; repetition < num; repetition++)
    {
        result += str;
    }

    return result;
  }
  
  repeatStringNumTimes("abc", 3);