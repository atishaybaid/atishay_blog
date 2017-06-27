
function min(x,y,z){
    if(x<=y){
        if(x<=z){
            return x;
        } else{
            return z;
        }
    } else{
        if(y>=z){
            return z;
        } else{
            return y;
        }
    }
}


function steps(str1,str2,l1,l2){

   


    if(l1==0){
        return l2;
    }

    if(l2==0){
        return 0;
    }

     if(str1[l1-1] === str2[l2-1]){
        steps(str1,str2,l1-1,l2-1);

    } 

        return 1 + min(steps(str1,str2,l1,l2-1),steps(str1,str2,l1-1,l2),steps(str1,str2,l1-1,l2-1));
    


}