const nums = [2, 4, 6, 8, 9, 3, 5];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log('--------for of loop-----------');

for (let n of nums) {
    console.log(n);
}

console.log('---------for each function----------');

// callback function
// nums.forEach(() => {console.log('loop executed')});
// nums.forEach((a) => { console.log(a); });
nums.forEach((a, b) => { console.log(a, b); });
nums.forEach((a, b, c) => { console.log(a, b, c); });

// print only even numbers
console.log('---------print only even numbers----------');
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
    }
}

console.log('---------print only even numbers : method 2----------');
nums.forEach((n) => {
    if (n % 2 === 0) {
        console.log(n);
    }
});

console.log('---------print only odd numbers : method 2----------');
nums.forEach((n) => {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

console.log('--------to store value in new array----------');