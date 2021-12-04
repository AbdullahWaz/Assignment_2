let arr = [1,2,2,4,5,6];
function removeDuplicate(arr) {
    let result = [];
    for(var i=0;i<arr.length;i++){
        if(arr.length === 0) {
            result.push(arr[i]);
        }
        if(result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicate(arr));