let arr = [4,5,6];
function primeNo(arr) {
    let result = [];
    let count = 0;
    for(var i=0;i<arr.length;i++){
        if (arr[i] === 1) {
            console.log(" 1 is prime no");
        } else if(arr[i] > 1) {
            for (var k=2;k<arr[i]-1;k++) {
                if (arr[i] % k === 0) {
                    count = count +1;
                }
            }

        }
    }
    if (count === 1) {
        result.push(arr[i])
    }
    return result;
}
console.log(primeNo(arr));
