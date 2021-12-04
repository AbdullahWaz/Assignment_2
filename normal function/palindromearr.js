
var arr = ['1221','did','rest','test']
function palindromeArr(arr) {
    var tmp;
    var res = [];
    var rev;
    for (var i=0;i<arr.length;i++) {
            tmp = arr[i];
            rev = arr[i].split("").reverse().join("");
            if (tmp === rev) {
                res.push(arr[i]);
            }
    } 
    
    return res;
}
console.log(palindromeArr(arr));
