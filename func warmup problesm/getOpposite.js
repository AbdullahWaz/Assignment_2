// Write a function called “getOpposite”.
// Given a number, return its opposite
// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a”);
// getOpposite(5.5);
// Output:
// -5
// 0
// 5
// -1
// -1

var num = 5.5;
function getOpposite(num) {
    return num * -1;
}
var result = getOpposite(num);
console.log(result);