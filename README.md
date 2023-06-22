# js
Welcome to my JavaScript repository! This Git repository is dedicated to showcasing my JavaScript projects and code examples, highlighting my proficiency and expertise in the JavaScript programming language.
In this folder are included projects written in js

booWho.js                           Check if a value is classified as a boolean primitive. Return true or false

caesarsCipher.js                    One of the simplest and most widely known ciphers is a Caesar cipher, also 
                                    known as a shift cipher. In a shift cipher, the meanings of the letters are
                                    shifted by some set amount.
                                    A common modern use is the ROT13 cipher, where the values of the letters
                                    are shifted by 13 places. Thus A ↔ N, B ↔ O, and so on.
                                    Write a function that takes a ROT13 encoded string as input and returns a
                                    decoded string.
                                    All letters will be uppercase. Do not transform any non-alphabetic character
                                    (i.e. spaces, punctuation), but do pass them on.

chunkyMonkey.js                     Write a function that splits an array (first argument) into groups the length
                                    of size (second argument) and returns them as a two-dimensional array.

confirmTheEnding.js                 Check if a string (first argument, str) ends with the given target string 
                                    (second argument, target)

falsyBouncer.js                     Remove all falsy values from an array. Return a new array; do not mutate the original array.
                                    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
                                    Hint: Try converting each value to a Boolean.

findersKeepers.js                   Create a function that looks through an array array and returns the first element in it that
                                    passes a 'truth test'. This means that given an element x, the 'truth test'
                                    is passed if func(x) is true. If no element passes the test, return undefined.

mutations.js                        Return true if the string in the first element of the array contains all of the letters of
                                    the string in the second element of the array. For example, ["hello", "Hello"], should return
                                    true because all of the letters in the second string are present in the first, ignoring case.
                                    The arguments ["hello", "hey"] should return false because the string hello does not contain
                                    a y. Lastly, ["Alien", "line"], should return true because all of the letters in the line are 
                                    present in Alien.
                       
repeatAStringRepeatAString.js       Repeat a given string str (first argument) for num times (second argument). 
                                    Return an empty string if num is not a positive number. 
                                    For the purpose of this challenge, do not use the built-in .repeat() method.

roman_numer_converter.js            As the name says :)

sliceAndSplice.js                   You are given two arrays and an index.
                                    Copy each element of the first array into the second array, in order.
                                    Begin inserting elements at index n of the second array.
                                    Return the resulting array. The input arrays should remain the same after the function runs

Telephone_number_validator.js       Return true if the passed string looks like a valid US phone number.
                                    The user may fill out the form field any way they choose as long as it has the format of a
                                    valid US number. The following are examples of valid formats for US numbers (refer to the
                                    tests below for other variants):
                                    555-555-5555
                                    (555)555-5555
                                    (555) 555-5555
                                    555 555 5555
                                    5555555555
                                    1 555 555 5555
                                    For this challenge, you will be presented with a string such as 800-692-7753 or 
                                    8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any
                                    combination of the formats provided above. The area code is required. If the country code
                                     is provided, you must confirm that the country code is 1. Return true if the string is a
                                     valid US phone number; otherwise, return false.

titleCaseASentence.js               Return the provided string with the first letter of each word capitalized. 
                                    Make sure the rest of the word is in lowercase.
                                    For the purpose of this exercise, you should also capitalize connecting words like the and of.

truncateAString.js                  Truncate a string (first argument) if it is longer than the given maximum string
                                    length (second argument). Return the truncated string with a ... ending.

whereDoIBelong.js                   Return the lowest index at which a value (second argument) should be inserted into an array
                                    (first argument) once it has been sorted. The returned value should be a number.
                                    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 
                                    (index 0), but less than 2 (index 1).
                                    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
                                    it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
