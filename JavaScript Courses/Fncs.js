function fn1(x) {
    function fn2(y){
        return x * y
    }
    return fn2
}

let result = fn1(3)
console.log(result(2));
