/*
Check if a string (first argument, str) ends with the given target string 
(second argument, target).
*/
function confirmEnding(str, target) 
{
   let strLen = str.length;
   let targetLen = target.length;
   let result = false;
   //console.log(str.slice(-targetLen)=== target);
   if(str.slice(-targetLen)=== target)
     return true;
   return result;
}
  
confirmEnding("Connor", "n");