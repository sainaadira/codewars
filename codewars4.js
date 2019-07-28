// https://www.codewars.com/kata/complementary-dna/train/javascript
//
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  let array = []
  // starting off with an empty array
  for (let i = 0; i < dna.length; i++) {
    let strand = dna.charAt(i)
    // to get the complemented strand i need to reassign AT and CG
    if (strand === "A") {
      strand = "T"
      array.push(strand)
    } else if (strand === "T") {
      strand = "A"
      array.push(strand)
    } else if (strand === "C") {
      strand = "G"
      array.push(strand)
    } else if (strand === "G") {
      strand = "C"
      array.push(strand)
    }
  }
  let result = array.join("")
  return result
}
//
//
// *******************************************************************
// https://www.codewars.com/kata/remove-string-spaces/train/javascript
//
// Simple, remove the spaces from the string, then return the resultant string.


// Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');

function noSpace(x) {
  let originalArray = x.split("")
  let newArray = []
  // created variable orginal array to split at every index
  // created variable new array holds everything that doesn't have a space
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] !== " ") {
      newArray.push(originalArray[i])
    }
    // if conditional to say if the orginal array doesn't have spaces then push
    // those characters into the new array
  }
  let str = newArray.join('')

  return str
}

//********************************************************************************
// https://www.codewars.com/kata/vowel-count/train/javascript
//
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  str = str.toLowerCase()
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelsCount = 0
  for (let i = 0; i < str.length; i++) {
    vowels.forEach((g) => {
      // i need a for each loop to get through the array- passing in 'g' as a consonant
      if (str[i] === g) {
        vowelsCount++
      }
    })
  }
  return vowelsCount
}

// ******************************************************************************
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).


function toCamelCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if ((str.charAt(i) == '-') || (str.charAt(i) == '_')) {
      // The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string. (from MDN.com)
      i++
      if (i < str.length) {
        result += str.toUpperCase().charAt(i)
      }
    } else {
      result += str.charAt(i)
    }
  }
  return result
}


// **************************************************************************************
// https://www.codewars.com/kata/string-scramble/train/javascript
// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
//
// Ex:
//
// scramble('abcd', [0,3,1,2]) -> 'acdb'
//
// The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corisponding numbers in the index array.
//
// In other words, put the first character in the string at the index described by the first element of the array
//
// You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).


function scramble(str, arr) {
  let newArr = []
  for (let i = 0; i < str.length; i++) {
    newArr[arr[i]] = str[i]
  }
  return newArr.join('')
}

scramble('love', [0, 3, 1, 2])
// -> 'lveo'
