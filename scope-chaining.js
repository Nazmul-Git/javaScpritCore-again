const myName = "Sunny"; // Global Scope ** Access from anywhere

const first = () => {   // Functional scope
  const age = 25;

  if (age >= 20) {      // if or for loop .. are ES6 - Block scope 
    const id = 3;
    console.log(age);  // 25
    const myFnc=()=>{
        console.log(id)  // inside a function scope we can access if block scope
        console
    }
    myFnc();

    // var is  function-scope
    var student = true; // block scope only consider let & const
  }
//   console.log(id); //ReferenceError: id is not defined

  function second(){
    console.log(`${myName} is a ${age} years.`);
    // console.log(id); //ReferenceError: id is not defined
  }

  second();
};

first();


/*
   Block Scope : Outside the block scope we did not access it. It access have only the area of the block scope.
                 soja kotha - block scope er baire theke, block scope er kono kicu access pabo na.
   
   Function Scope : Inside a function or block scope we can access her all parents function and also Global scope.
   
*/ 