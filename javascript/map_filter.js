// Filter
const nums = [2, 4, 6, 8, 9, 3, 5];

const evenNums=nums.filter((n) => {
    return n % 2 === 0;
});

console.log(evenNums);

const prices=[1200,340,510,670,950];
const newPrices=prices.filter((p) => {
    return p >= 600;
});

console.log(newPrices);

// Map
const sqrNums=nums.map((n) => {return n**2;});
// const sqrNums=nums.map(n => n**2);
console.log(sqrNums);

// add gst 18%
/* console.log(100+100*(18/100));
console.log(100+100*0.18);
console.log(100+1.18); */
const gstPrices=prices.map(p => {
    return p * 1.18;
});
console.log(gstPrices);

// old batch
/* const nums=[5,8,7,2,1,6];

for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}

console.log('--------for of loop------');

    for(let n of nums){
        console.log(n);
    }

    nums.forEach((b,i,n)=>{
        console.log(b,i,n);
    })

    for(let n of nums){
        if(n%2==0){
            console.log(n);
        }
    }

    for(let n of nums){
        console.log(n**2);
    }

    const price=[120,3400,500,200,780,700];
        for(let n of price){
            if(n>500){
                console.log(n);
            }
        
        }

        //apply 5% discount on all prices
        console.log('-------5% discount')
        for(let n of price){
            console.log(n);
            dis=n*0.05;
            console.log('discount=',dis);
            n=n-dis;
            console.log('price after discount',n);
        } */