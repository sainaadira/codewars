// https://www.codewars.com/kata/string-repeat/train/javascript

// Write a function called repeatString which repeats the given String src exactly count times.
//
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n)
}

// this solution is using the repeat method i found on mdn---
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

  // ANSWER TWO
// *************************
function repeatStr (n, s) {
var str='';
for(var i=0; i < n; i++)
  str+=s;
  return str;
}
// += (string = string +n )
// this is a solution i was originally thinking of working with
//
// *****************************************************************************************
// https://www.codewars.com/kata/return-negative/train/javascript
// given a number, find its opposite

function opposite (number){
  return -number
}
// in this case i am just putting a negative value before the number! simple.
//
// **********************************************************************************************
// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// sample tests:
// Test.assertEquals(countSheep(1), "1 sheep...");
// Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
// Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");

var countSheep = function (num){
 let sheep = ''
 for(let i = 1; i <= num; i++){
  sheep= sheep + `${i} sheep...`

 }
  return sheep

}
countSheep(6)

// ******************************************************************************
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//
//
// Write a function to split a string and convert it into an array of words. For example:
// "Robin Singh" ==> ["Robin", "Singh"]
//
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


function stringToArray(string){
    return string.split(' ')
    }

    // *******************************************************************************

// https://www.codewars.com/kata/is-there-a-vowel-in-there/train/javascript
//
//
//     Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//
//     If they are, change the array value to a string of that vowel.
//
//     Return the resulting array.

function isVow(a){

 let result = [];
	//checks a list of numbers to see if any element can be converted to lowercase vowel using unicode
	for (let i = 0; i < a.length; i++) {
	//if so, change element to string value of letter
		if (a[i]===97 || a[i]===101 || a[i]===105 || a[i]===111 || a[i]===117) {
			result.push(String.fromCharCode(a[i]));
    //   (The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units. -- mdn)
		// //else, leave as is
		} else {
			result.push(a[i]);
		}
	}
	//return result
	return result;
}

isVow([101,121,110,113,113,103,121,121,101,107,103]);
