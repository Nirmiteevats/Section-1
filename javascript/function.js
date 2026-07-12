function addNums(a, b) {
    c = a + b;
    console.log(c);
}

addNums(34, 23);
// console.log(c);

const getAvg = function (m1, m2, m3) {
    let avg = (m1 + m2 + m3) / 3;

    // console.log(avg);
    return avg;
    
};//best practice
// getAvg(4,89,23);

const result = getAvg(4, 89, 23);
console.log(result);

// 2
// arrow fuction ----introduced in es6
const factorial = (n) => {
    let f = 1;

    for (let i = 1; i <= n; i++) {
        f = f * i;

    }
    return f;
}

const fact = factorial(7);
console.log(fact);

// NaN is displayed when an operation is perfoermed on undefined values.
console.log(5 + undefined);
console.log(1=='1');
console.log(1==='1');