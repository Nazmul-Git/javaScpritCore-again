console.log(Boolean(0))  //false
console.log(Boolean(''))  //false
console.log(Boolean(undefined))  //false
console.log(Boolean('sunny')) //true
console.log(Boolean({}))  //true
console.log(Boolean([]))  //true

// for ex:
const money=0;  //0 is false, execute else statement
if(money){
    console.log('Do not  spent it all.');
}else{
    console.log('You should get a job.');
}