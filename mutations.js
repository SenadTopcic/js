/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

*/
function mutation(arr) 
{
	let result = false;
	let counter = 0;
	let doubleLetter = 0;
	for (let iterator1 = 0; iterator1 < arr[1].length; iterator1++)
	{
		doubleLetter = 0;
		for (let iterator2 = 0; iterator2 < arr[0].length; iterator2++)
		{
			if(arr[1][iterator1].toLowerCase() === arr[0][iterator2].toLowerCase())
			{
				if(doubleLetter == 0)
				{
					counter++;
					doubleLetter = 1;
				}
			}
		}
	}

	if(counter === arr[1].length)
	result = true;
	return result;
}