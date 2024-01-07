function isTwo(n){
    if(n===1){
        return true;
    }else if (n%2===0 && n!=0){
        return isTwo(n/2);
    }else{
        return false;
    }
}

let n = prompt('Enter your namder');
if(isTwo(n)){
    console.log(n);
    console.log('Yes');
}else{
    console.log(n);
    console.log('No');
}