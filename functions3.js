function evenORodd (x){
    if(x % 2 == 0){
        return "Even";
    }else{
        return "odd";
    }
}

const ans = evenORodd(5);
console.log(ans);