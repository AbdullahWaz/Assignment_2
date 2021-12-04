// Problem:
// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);
// Output:
// true
// true
// false
// -1

function isEven(num){
    if (num % 2 === 0) {
        return true;
    } else if (num !== "number"){
        return -1;
    }
   }
   var even = isEven("11h")

console.log(even);