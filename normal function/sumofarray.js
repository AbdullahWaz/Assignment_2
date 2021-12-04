function add(arr){         
    var res =  0;
    for(var i=0;i<arr.length;i++){                  
        res += Number(arr[i]);
    }
        return res;
}
console.log(add([1,2,3,9]));

