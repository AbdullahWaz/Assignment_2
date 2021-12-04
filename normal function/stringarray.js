var arr = ['first','second','third','fourth'];
function strArr(arr) {
  for (var i=0;i<arr.length;i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return arr;
}
console.log(strArr(arr));
