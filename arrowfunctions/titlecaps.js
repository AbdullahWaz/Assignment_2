const strArr = ['this','is','arrow','function'];
const newArr = strArr.map((sArr) => sArr.toLowerCase().charAt(0).toUpperCase() + sArr.substr(1)) ;
console.log(newArr);