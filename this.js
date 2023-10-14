
var firstName='sunny'; // when we declared a global variable var,
//for arrow function, var create a global variable on browser window. 

const jonas={
    firstName:'jonas',
    year:1995,
    calAge: function(){
        console.log(2023-this.year);
    },
    calName: ()=>{
        console.log(this); //In arrow function this keyword target on browser window. 
        console.log(this.firstName); //1st: undefined //2nd when dec var firstName: sunny
    }
    
}

jonas.calAge(); //output: 28
jonas.calName(); //undefined & this target browser window  //when we declare var firstName then output: sunny




