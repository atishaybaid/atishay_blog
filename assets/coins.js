function greater(a,b){
    return a>b?a:b;
}


function split(n) {
    if(n===0){
        return 0;

    }

    if(n===1){
        return 1;
    }

       
    return greater(n,split(Math.floor(n/2))+split(Math.floor(n/3))+split(Math.floor(n/4)))
}