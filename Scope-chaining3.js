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
        var identity=true;
    }
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