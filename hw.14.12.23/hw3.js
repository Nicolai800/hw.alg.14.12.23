function printFib(x){
    if(x<1){
        return;
    }else if (x===1){
        console.log('0 ');
    }else if (x===2){
        console.log('0 1 ');
    }else{
        printFib(x-1);
        let fib = getFib(x-1);
        console.log(fib + ' ');
    }
}

function getFib(x){
    if(x<2){
        return x;
    }else{
        return getFib(x-1)+getFib(x-2);
    }
}

console.log(printFib(10));
