// Problem
// Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400

var arr = [1, 2, 3];
function hourToSeconds(arr) {
    var res = 0;
    var secArr = [];
    for(var i=0;i<arr.length;i++){
        res = arr[i] * 60 * 60;
        secArr.push(res);
    }
    return secArr;
}
var data = hourToSeconds(arr);
console.log(data);