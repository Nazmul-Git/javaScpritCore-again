let i=1;
while(i<=10){
    // console.log(`While: i am ${i}`);
    i++;
}

let ex=Math.trunc(Math.random()*6+1);
console.log(ex);
while(ex !==6){
    console.log(`your ex is = ${ex}.`);
    ex= Math.trunc(Math.random()*6)+1;
    if(ex==6)console.log('End loop...')
}