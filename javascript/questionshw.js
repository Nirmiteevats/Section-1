// 1. WAP to reverse a number
// 2. WAP to check if a number is palindrome
// 3. WAP to check if a number is armstrong

// 1

let num = 12345;
let reverse = 0;
let temp = num;

while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log("Original Number:", num);
console.log("Reversed Number:", reverse);

// 2

let n = 121;
let original = n;
let rev = 0;

while (n > 0) {
    let d = n % 10;
    rev = rev * 10 + d;
    n = Math.floor(n / 10);
}

if (original === rev) {
    console.log(original + " is a Palindrome Number");
} else {
    console.log(original + " is Not a Palindrome Number");
}

// 3

let number = 153;
let original1 = number;
let sum = 0;

// Count the number of digits
let digits = number.toString().length;

while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, digits);
    number = Math.floor(number / 10);
}

if (sum === original1) {
    console.log(original1 + " is an Armstrong Number");
} else {
    console.log(original1 + " is Not an Armstrong Number");
}