function getSum(x){
    if(x<10){
        return x;
    }else{
        return x%10+getSum(Math.floor(x/10));
    }
}

let sum = getSum(123);
console.log(sum);