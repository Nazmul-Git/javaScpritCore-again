// for primitive 
let age=30;
let oldAge=age; //32 oldAge a assign haor kotha...!!

age=32;
console.log(age); // 32
console.log(oldAge); // 30 //but oldAge =30   why????????


// for reference type
const me={
    name:'sunny',
    age:25
};
const islam=me;
islam.age=1; // age value is the same this 2 object...
console.log('Islam: ',islam); //Islam:  { name: 'sunny', age: 1 }
console.log('Me :',me);  //Me : { name: 'sunny', age: 1 }



/*
What happening here ??

*/