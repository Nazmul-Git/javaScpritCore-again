
// var firstName='sunny'; // when we declared a global variable var,
//for arrow function, var create a global variable on browser window. 

const jonas={
    firstName:'jonas',
    year:1960,
    calAge: function(){
        console.log(2023-this.year);

        // this in function expression
        const self=this; //assigning this in a variable
        const calAgeExpr=function(){
            // console.log(this);  // target the browser window
            console.log(this.year); //undefined
            console.log(self); //jonas object
            console.log(self.year); //1960
            
        };
        calAgeExpr();
    },
    calName: ()=>{
        // console.log(this); //In arrow function this keyword target on browser window. 
        // console.log(this.firstName); //1st: undefined //2nd when dec var firstName: sunny
    },
    
    
};

// jonas.calAge(); //output: 28
jonas.calName(); //undefined & this target browser window  //when we declare var firstName then output: sunny which come from browser--> window--> firstName

jonas.calAge();




