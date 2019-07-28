
// **************************************************************************************

// https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//


function abbrevName(name){
  name.toUpperCase()
  let arr = name.split(' ')
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`
  // got help with this line but i am getting the capital letters with the period here
}
// ***************************************************************************************
// https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/train/javascript


// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

the og solution :

function howMuchILoveYou(nbPetals) {
    let ans = nbPetals % 6;
    // nb petals mod 6 stands for the number of responses (6)
    switch(ans) {
        case 1:
            return 'I love you';
            // switch statement was used because it is better pratice than using mulitple if..else statments. switch allows the code to run until a case is matched. if case 1 matched the response then case one is executed and so on
        case 2:
            return 'a little';
        case 3:
            return 'a lot';
        case 4:
            return 'passionately';
        case 5:
            return 'madly';
        default:
            return 'not at all';
    }
}

// the one liner solution but i like the above better
// const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]


// *******************************************************************************************************

// https://www.codewars.com/kata/is-this-my-tail/train/javascript

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
//
// If the tail is right return true, else return false.
//
// The arguments will always be strings, and normal letters.
//
// For Haskell, more specifically, body has the type of String and tail has the type of Char.


function correctTail (body, tail) {
  return body[body.length-1] === tail;
}


// ******************************************************************************************************

// https://www.codewars.com/kata/the-hidden-word/train/javascript

// Maya writes weekly articles to a well known magazine, but she is missing one word
// each time she is about to send the article to the editor. The article is not complete
// without this word. Maya has a friend, Dan, and he is very good with words, but he
// doesn't like to just give them away. He texts Maya a number and she needs to find
// out the hidden word. The words can contain only the letter: "a", "b", "d", "e",
// "i", "l", "m", "n", "o", and "t".

// Luckily, Maya has the key:

// "a" - 6 "b" - 1 "d" - 7 "e" - 4 "i" - 3 "l" - 2 "m" - 9 "n" - 8 "o" - 0 "t" - 5

// You can help Maya by writing a function that will take a number between 100 and
// 999999 and return a string with the word.

// The input is always a number, contains only the numbers in the key. The output
// should be always a string with one word, all lowercase.

// Maya won't forget to thank you at the end of her article :)

// og attempt
numKey = ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"];
// put the letter keys in an array b/c they are string values

let hiddenWord = (num) => {
  return (num.toString().split('').map(num => numKey[num])).join('');
  // map method calls the provided function once for each element in an array, in order (mdn.com)
}



// second attempt
let hiddenWord = function(num) {
    let key = "oblietadnm";
    return String(num).split('').map((a) => key[a]).join('')
}

//
// ********************************************************************************************************

// https://www.codewars.com/kata/small-enough-beginner/train/javascript

// You will be given an array and a limit value. You must check that
// all values in the array are below or equal to the limit value. If
// they are, return true. Else, return false.

// You can assume all values in the array are numbers.


function smallEnough(a, limit){
  let arr = [];
  let check = a.filter(function(x) {
  // The filter() method creates a new array with all elements that pass the test
  // implemented by the provided function (mdn.com )
    if(x <= limit) {
      arr.push(x);
      // setting the if statement if values in array are less than or equal to the limit value
      // then add x to the array.. adds on to the length of array
    }
  });
// set condtional to check if the the array length is equal to the  limit value return true if yes, false if no
  if(arr.length === a.length) {
    return true;
  } else {
    return false;
  }
};
