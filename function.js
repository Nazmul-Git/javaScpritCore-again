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
