console.log(me);   //undefined
// console.log(job);  //ReferenceError: Cannot access 'job' before initialization
// console.log(year); //ReferenceError: Cannot access 'year' before initialization

var me='sunny';
let job='developer';
const year=1998;




// function
 console.log(addDecl(2,3)); //5
//  console.log(addExp(2,3));     //ReferenceError: Cannot access 'addExp' before initialization
// console.log(addArrow(2,3));   //ReferenceError: Cannot access 'addArrow' before initialization
// console.log(subExp(3,2));    //TypeError: subExp is not a function
// console.log(subArrow(3,2));    //TypeError: subArrow is not a function

//  function declaration give the access to call before initialization.
 function addDecl(a,b){
    return a+b;
 }

 const addExp= function(a,b){
    return a+b;
 }

 const addArrow=(a,b)=>a+b;


 var subExp= function(a,b){
    return a-b;
 }

 var subArrow=(a,b)=>a-b;
 