function addNums(a,b){
    c=a+b;
    console.log(c);
}

addNums(34,23);
//console.log(c);

const getAvg=function(m1,m2,m3){
    let avg=(m1+m2+m3)/3;

    //console.log(avg);
    return avg;
}

const result=getAvg(4,89,23);
console.log(result);

const factorial=(n)=>{
    let f=1;
    
    for (let i=1;i<=n;i++){
        f=f*i;

    }
    return f;
}

const fact=factorial(6);
console.log(fact);