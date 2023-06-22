/*
Truncate a string (first argument) if it is longer than the given maximum string
 length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    let result = "";
    let maxLength = str.length;

    if (num < maxLength ) {
        result = str.slice(0,num) + "..."        
    }
    else
        result = str;
    return result;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);