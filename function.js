//  Function Declaration
// we can call function before declaration
// its call hoisting.
const age1= calAge(1998);

function calAge(birthYear){
    return 2023-birthYear;
}
// const age1= calAge(1998);
console.log(age1);

// ------------------------------------------------------------

//  Function Expression
// Cannot access 'calAge2' before initialization.
//  Thats the reason function expression is best.

// const age2=calAge2(1997);


const calAge2= function(birthYear){
    return 2023-birthYear;
}
const age2=calAge2(1997);
console.log(age2);


// --------------------------------------------

// Arrow Function
const calAge3= birthYear=>2023-birthYear;
console.log(calAge3(1999));


const yearsJobRetirement=(birthYear,yourName)=>{
    const age4=2023-birthYear;
    const retirement=55-age4;
    return `${yourName} retires in ${retirement} years.`;
}
console.log(yearsJobRetirement(2000, 'Siam'));




// example , call a function from another function
const fruitPieces=(fruitQuantity)=>{
    return fruitQuantity*4;
}

const fruitProcess=(apple, orange)=>{
    const applePieces=fruitPieces(apple);
    const orangePieces=fruitPieces(orange);
    const juice= `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcess(2,3))