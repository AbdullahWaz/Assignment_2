let arr = [1,2,5,7,6]

// step 1: Normal FUnction:
function isOdd(x) {
    return x % 2;
}
let ouput = arr.filter(isOdd);
console.log("Normal function " + ouput);

//step 2: this normal function can be written as:
let output = arr.filter(function isOdd(x){
    return x % 2;
})
console.log("Normal function also can be written as " + ouput);

// step 3: arrow function:
let output1 = arr.filter((x) => x % 2);
console.log("Arrow function " + ouput);

// syntax: array.filter(function(currentValue, index, arr), thisValue)




