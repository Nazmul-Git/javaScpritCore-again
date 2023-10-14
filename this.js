
const jonas={
    firstName:'jonas',
    year:1995,
    calAge: function(){
        console.log(2023-this.year);
    },
    calName: ()=>{
        console.log(this); //In arrow function this keyword target on browser window. 
        console.log(this.firstName);
    }
    
}

jonas.calAge(); //output: 28
jonas.calName(); //undefined & target browser window




