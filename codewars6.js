// ******************************************************************************
// https://www.codewars.com/kata/basic-variable-assignment/train/javascript


// This code should store "codewa.rs" as a variable called "name" but it's not working. Can you figure out why?

// var a == "code";
// var b == "wa.rs";
// var name == a + b;

let a = "code"
let b = "wa.rs"
let name = a + b

//
// ***************************************************************************

// https://www.codewars.com/kata/get-planet-name-by-id/train/javascript

// The function is not returning the correct values. Can you figure out why?

// getPlanetName(3); // should return 'Earth'

// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//     case 2:
//       name = 'Venus'
//     case 3:
//       name = 'Earth'
//     case 4:
//       name = 'Mars'
//     case 5:
//       name = 'Jupiter'
//     case 6:
//       name = 'Saturn'
//     case 7:
//       name = 'Uranus'
//     case 8:
//       name = 'Neptune'
//   }
//
//   return name;
// }
// example above ^^^^^^^^^^^^^^^^^

  // my answer below
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }

  return name;
}

// the only difference was adding the break after each case. the break after each statement indicates 'breaking' of the code block and this keyword stops execution after each statment is made


// If you forget a break then the script will run from the case where the criterion is met and will run the case after that regardless if criterion was met (cited from: MDN)
// ********************************************************************************


// Is the string uppercase?
// Task
// Create a method is_uppercase() to see whether the string is ALL CAPS. For example:

// is_uppercase("c") == False
// is_uppercase("C") == True
// is_uppercase("hello I AM DONALD") == False
// is_uppercase("HELLO I AM DONALD") == True
// is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
// is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True

// // Corner Cases
// For simplicity, you will not be tested on the ability to handle corner cases (e.g. "%*&#()%&^#" or similar strings containing alphabetical characters at all) - an ALL CAPS (uppercase) string will simply be defined as one containing no lowercase letters. Therefore, according to this definition, strings with no alphabetical characters (like the one above) should return True.

// i had to define the string's prototype then run the function to:::
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
  // turn the string uppercase using the toUppercase method and compare it to the  string values
}
// *********************************************************************************

// https://www.codewars.com/kata/l1-set-alarm/train/javascript

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
//
// setAlarm(true, true) -> false setAlarm(false, true) -> false setAlarm(false, false) -> false setAlarm(true, false) -> true
//
// setalarm(true, true) -> false
// setalarm(false, true) -> false
// setalarm(false, false) -> false
// setalarm(true, false) -> true

function setAlarm(employed, vacation){
  if(employed == true){
    if(vacation == false) return true;
    else return false;
  }
  else return false;
}


//
// **********************************************************************

// https://www.codewars.com/kata/sentence-smash/train/javascript
// Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// var words = ['hello', 'world', 'this', 'is', 'great'];
// smash(words); // returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you will always get an array.


smash = function (words) {
  return words.join('');
};


//
// **********************************************************************
