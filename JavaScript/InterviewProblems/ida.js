const showOddNum = (n) => {
    for(i=0; i<=n; i++){
        if(i%2 !== 0){
            console.log(i)
        }
    }
}

showOddNum(10)