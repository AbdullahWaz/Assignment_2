
// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);
// Output:
// true
// flase
// flase
// flase

function isBothOdd(num1, num2) {
    if ((num1 % 2 !== 0) && (num2 % 2 !== 0)) {
        return true;
    } else {
        return false;
    }
}

var res = isBothOdd(4, 3);
console.log(res);