//
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

// https://www.codewars.com/kata/sum-of-positive/train/javascript

function positiveSum(arr) {
 let sum = 0;
 for(let i = 0; i < arr.length; i++) {
   if(arr[i] > 0) {
    sum += arr[i];
  }
 }
return sum;
}

// ****************************************************
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
// Example:
//
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
	if (num>0)	{
  		return num * -1
	}
	else {
		return num
	}
}

makeNegative(-5)

// ************************************************************
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
  if ( bool === true) {
    return 'Yes'
  } else {
     return 'No'
  }

}

boolToWord(true)
boolToWord(false)

// *****************************************************************


// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  return array.reduce((a,b) => a + b)/array.length;
};

find_average([4,4,4]);



// **********************************************************************

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
// We need a function that can transform a number into a string.
//
// What ways of achieving this do you know?
//
// Examples:
// numberToString(123); // returns '123';`
// numberToString(999); // returns '999'


function numberToString(num) {
 	return String(num);
}


numberToString(7)
