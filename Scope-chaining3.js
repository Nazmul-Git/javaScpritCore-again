// 'use strict';

function calAge(birthYear){
    // 2. firstName not found in callAge()
  const age= 2023-birthYear;

  function printAge(){  
    //  firstName is come from Global-Scope.
    //  *****Scope ony can access his outer scope*****
    const output=`${firstName}, you are ${age}, born in ${birthYear}`; 
    // 1. firstName not found in printAge()
    
    console.log(output);

    if(birthYear<=2006){
        const str=`You are adult ${firstName}`;
        console.log(str);
        // var identity=true; // never use var
        function add(a,b){
            // firstName='Jonas';  //TypeError: Assignment to constant variable.
            const firstName='Jonas';
           return firstName + a+b;  //Jonas55.. scope always take value from nearest scope.  
        }
        
    }
    console.log(add(5,5));  //ReferenceError: add is not defined because of in the top of this code we use 'use strict';
    // console.log(str);  //ReferenceError: str is not defined
    // console.log(identity); //true
  }
  printAge();
  return age;
}

const firstName='Sunny'; // 3. firstName was found in Global-Scope
calAge(1998);



// Let's try to access scope variable or function.

//   *****Scope can not access his inner scope*****

// console.log(age);     //ReferenceError: age is not defined
// printAge();          //ReferenceError: printAge is not defined

//  We can not access 