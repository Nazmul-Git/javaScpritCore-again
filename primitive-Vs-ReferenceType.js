//1. for primitive 
let age=30;
let oldAge=age; //32 oldAge a assign haor kotha...!!

age=32;
// console.log(age); // 32
// console.log(oldAge); // 30 //but oldAge =30   why????????


//2. for reference type
const me={
    name:'sunny',
    age:25
};
const islam=me;
islam.age=1; // age value is the same this 2 object...
// console.log('Islam: ',islam); //Islam:  { name: 'sunny', age: 1 }
// console.log('Me :',me);  //Me : { name: 'sunny', age: 1 }



/*
What happening here ??
Details in notebook.
*/



// 3. copying one new object to other
const me2={
    name:'sunny',
    age:25,
    language:['c','js']
};
// console.log(me2);   //{ name: 'sunny', age: 25 }
const me2Copy=Object.assign({}, me2);
me2Copy.age=1;
// console.log(me2Copy); //{ name: 'sunny', age: 1 }
//Copying object but still in same memory reference.Its call shallow copy .Let's see-----
me2Copy.language.push('react.js');
me2Copy.language.push('node.js');
console.log(me2);  
/**
 me2 {
  name: 'sunny',
  age: 25,
  language: [ 'c', 'js', 'react.js', 'node.js' ]
}
 */
console.log(me2Copy); 
/**
 me2Copy {
  name: 'sunny',
  age: 1,
  language: [ 'c', 'js', 'react.js', 'node.js' ]
}
 */
// so, still in same memory reference.



// -> Deep clone [ coming soon .....]

