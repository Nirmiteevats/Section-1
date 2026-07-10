// program 1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// new new new new new
const nums= [34,67,24,32,67,9];
for(let i of nums){
    console.log(i);
    
}
// while loop
let a1=10;
while (a1 < 20) {
    console.log(a1);
    a1++;
};
console.log(a1);

// do while loop

let b1=10;
do{
    console.log(b1);
    b1++;
    
}while(b1>20)

// print all even nos range 10 to 35
for (let i = 10; i <= 35; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// new new new new new
// program 2
//wap to print all odd numbers in range of 10-60
for (let i = 10; i <= 60; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// WHILE LOOP- WHEN NUMBER OF ITERATIONS are not known
let a = 10;

while (a < 20) {
    console.log(a);
    a++;
};

// do while loop
let b = 20;
do {
    console.log(b);
    b++;

} while (b < 10);

// print first 10 fibonacci nos
a2=0
b2=1
for(let i=0;i<=10;i++){
    console.log(a2);
    c2=a2+b2;
    a2=b2;
    b2=c2;
}
// or

x=0
y=1
console.log(x);
console.log(y);
for(let i=0; i<8;i++){
    let c=x+y;
    console.log(c);
    [x,y]=[y,c]
}

