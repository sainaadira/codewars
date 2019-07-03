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

function countSheeps (arrayOfSheep) {
    let sheepCounter = 0;
    for( let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]=== true) {
        sheepCounter++;
      }
    }
    return sheepCounter;
  }


// My Test
let sheep=[true, false, true, true, false, true, true
false, false, true, true, true, true, false, false, true]



// *******************************************************************

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

console.log ("Hello World!")
