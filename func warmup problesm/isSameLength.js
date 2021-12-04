// Problem:
// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true


function isSameLength(word1, word2){
    if (word1.length === word2.length) {
        return true;
    } else {
        return false;
    }
   }
var words = isSameLength('GUVI', 'GEEK');
console.log(words);
