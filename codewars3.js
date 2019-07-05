// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
//
//
// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheeps(arrayOfSheep) {
  let sheepCounter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sheepCounter++;
    }
  }
  return sheepCounter;
}


// My Test
let sheep = [true, false, true, true, false, true, true
  false, false, true, true, true, true, false, false, true
]



// *******************************************************************

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

console.log("Bye exclamation point!")
//
// **********************************************************************

// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ? Then the result should be empty object literal { }

function count(string) {
  let results = {}
  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]){
      results= [string[i]] +=1;
    }else{
      results= [string[i]] =1;
    }

  }
return results;
}
console.log(count("testing"));

console.log(count(""));

//
// ***********************************************************************************

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
//
//
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
//
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
//
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.
//
//
// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

function removeSmallest(numbers) {
  let arrayResult = []
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
     smallest = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j++) {
    if (j !== numbers.indexOf(smallest)) {
     arrayResult.push(numbers[j]);
    }
  }
      console.log(numbers.indexOf(smallest));
  return arrayResult;
}
removeSmallest([3,13, 10, 2])

//
// ***********************************************************

// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// i.e.
//
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]


function friend(friends){
  return friends.filter(i => i.length === 4)
  // // filter method creates a new array with all
  // the elements that pass the test brought on by the function (mdn.com)
}

friend [("Elle", "Alex", "Kaia")]
friend [("Sam", "Cinda", "Nick")]
friend [("Leon", "Jack", "Kate")]
friend [("Sara", "Sheila", "Erica")]
