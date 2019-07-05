
// https://www.codewars.com/kata/complementary-dna/train/javascript
//
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
  let array= []
 for(let i=0; i< dna.length; i++){
    let strand= dna.charAt(i)
   if (strand==="A"){
     strand="T"
     array.push(strand)
   } else if(strand=== "T"){
     strand="A"
     array.push(strand)
   } else if(strand==="C"){
     strand= "G"
     array.push(strand)
   } else if (strand=== "G"){
     strand= "C"
     array.push(strand)
   }
  }
  let result= array.join("")
   return result
 }
