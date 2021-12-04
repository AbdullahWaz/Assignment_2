var rotate = function (arr, shift) { // rotate will have the values of arr, shift
    let tmp = 0;
    const len = arr.length;
    shift = shift % len; // % for ex 3 % 6 is 3, so our shift will happen 3 times
    for (let i = 0; i < shift; i++) {
       tmp = arr.pop(); // pop will remove the last element of an array and store it in tmp
       arr.unshift(tmp); // unshift will add the popued up element as first element in the array
    }
   return arr;
  };
  console.log(rotate([1,2,3,4,5,6],3));


