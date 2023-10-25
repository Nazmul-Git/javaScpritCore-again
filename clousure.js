const flight='LH256';
const sunny={
    name:'sunny',
    passport:28373,
};

const checkIn=(flightNum, passenger)=>{
   flightNum='E256';
   passenger.name='Nazmul' + passenger.name;
   if(passenger.passport===28373){
    console.log(`Checked in flight ${flightNum}.`); //Checked in flight E256.
   }else{
    console.log('wrong passport!')
   }

}
checkIn(flight, sunny);
console.log(flight); //LH256
console.log(sunny); //{ name: 'Nazmulsunny', passport: 28373 }  /object sunny - name, change into fnc and also change from the global obj/main obj. bcz of reference type. 

// 
const newPassport= (sunny) =>{
   sunny.passport= Math.trunc(Math.random()*10000000000);
};
newPassport(sunny);
checkIn(flight,sunny);
