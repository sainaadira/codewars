// https://www.codewars.com/kata/are-arrow-functions-odd/train/javascript


// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]


// sample tests
//
// Test.assertSimilar(odds([]), [], "Should handle empty array");
// Test.assertSimilar(odds([2, 4, 6]), [], "Should handle array with even numbers only");
// Test.assertSimilar(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only");
// Test.assertSimilar(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array");


// *** filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true-- MDN

function odds(values) {
  return values.filter(n => n % 2 === 1);
}


// ***********************************************************************************************
// https://www.codewars.com/kata/pizza-payments/train/javascript
// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:
//
// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

// i got pretty confused with this one and asked for help,
// will try to attempt this one again**

function michaelPays(costs) {
  // to start off with beginning charge since i dont know how much michael is paying at first
  let michael = 0
  // if cost less than 5 then michael pays full price but if greater than 5 kate will contribute 1/3 to the price
  if (costs < 5) {
    michael = costs
  } else if (costs >= 5) {
    if (costs / 3 <= 10) {
      michael = (costs / 3) * 2;
    } else {
      michael = costs - 10
    }
  }
  // to check if number is a whole mumber...The Number.isInteger() method determines whether the passed value is an integer.
  if (Number.isInteger(michael)) {
    return michael
  } else {
    return Number(michael.toFixed(2))
    // toFixed() returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length. -- Cited from MDN
  }
}
// *********************************************************************************************
// https://www.codewars.com/kata/sum-of-angles/train/javascript


// Find the total sum of angles in an n sided shape. N will be greater than 2.

// sample tests:
// Test.assertEquals(angle(3), 180);
//
// Test.assertEquals(angle(4), 360);

function angle(n) {
  // using 180 from the sample tests
  return 180 * (n - 2);
}

// ***********************************************************************************************
// https://www.codewars.com/kata/recycle/train/javascript


// You are having a BBQ, after the BBQ you are left with the rubbish. You have
// 3 recycling boxes:

// Red: Plastics, Green: Glass, Blue: Card.

// You will need to sort the rubbish according to the material and return the
// number of items in each box in the form of an array i.e [2,3,4] where 2 is the
// number of plastic items, 3 is the number of glass items and 4 is the number
// of card items. assume:

// Plastics > 0, Glass < 0, Card = 0

function recycleMe(recycle) {

  let red = 0
  let green = 0
  let blue = 0
// loop through recycle to get the values for red green and blue bins
  for (let i = 0; i < recycle.length; i++) {
    // // conditional referring back to example where plastics (blue) is equal to 0
    // and plastics(red) is less han 0 and glass (green) is greater than 0
    if (recycle[i] === 0) blue++
    else if (recycle[i] < 0) green++
    else if (recycle[i] > 0) red++

  }
  return [red, green, blue]
}


// *************************************************************************************

// https://www.codewars.com/kata/getnames/train/javascript

// The following code is not giving the expected results. Can you figure out
// what the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']

function getNames(data){
  return data.map(function(item){return item.name});
}
//
// The map() method creates a new array with the results of calling a provided function on every element in the calling array MDN
// this is helpful because i want to get a new array of data with names
