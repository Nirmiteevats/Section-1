//1 wap for even number

// var only works in function block
// let and const makes the variable local
// const doesn't  allow re assignment
num=20;
if(num%2===0){
    console.log('even');
    msg='hello';
    // let msg='hello';   error

}else{
    console.log('odd');
}
console.log(msg)

//2 
num=40;
if (num%2===0){
    console.log('even');

    let msg='hello';
    const pi=3.14;
    // pi=3.9876;
    // console.log(msg);


}else{
    console.log('odd');
}

// console.log(msg);

// console.log(1==="1");


//program 2
// check if a person is eligible for driving license
const age=20;
if(age>=18){
    console.log("you are eligible for DL");
}else{
    console.log("you are not eligible for DL");
}

// program 3 yeaahhhhhhhhhh

// check if the triangle is equilateral,isosceles or scalene

const a=30;
const b=40;
const c=30;

if(a===b && b==c){
    console.log("Equilateral triangle");
} else if(a===b||b===c||a===c){
    console.log("Isosceles triangle");
}else{
    console.log("Scalene triangle");
}


// print grade using marks
// marks>90 and marks<=100,A
// marks>70 and marks<=90,B
// marks>50 and marks<=70,C
// marks<50,fail

marks=95;
if (marks>90 && marks<=100){
    console.log('Grade A');
}else if(marks>70 && marks<=90){
    console.log('Grade B');
}else if(marks>50 && marks<=70){
    console.log('Grade C');
}else{
    console.log('Fail');
}

// check if a year is leap
const year=2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
    console.log('HAPPY LEAP YEAR');
}else{
    console.log('NOT A LEAP YEAR');
}