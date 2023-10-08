const friends = ["abul", "kabul", "babul"];
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "cabul";
console.log(friends); // [ 'abul', 'kabul', 'cabul' ]

// wait friends variable declared as const that not changeable.
// but changed the value of 2 index. how???
// The reason is only primitiv e value are mutable/changeable. array and object are not primitive.

//Mutable refers to data types that can be access or changed after they have been created and stored in memory.

// friends=['hasem', 'kasem']; // X (illegal)
// console.log(friends); //TypeError: Assignment to constant variable.

const firstName = "sunny";
const aboutMe = [firstName, "age", 2023 - 1998, friends, friends.length, true];
console.log(aboutMe, aboutMe.length);
//  output:
// [ 'sunny', 'age', 25, [ 'abul', 'kabul', 'cabul' ], 3, true ] 6

const calculateAge = (y) => {
  return 2023 - y;
};

const birthYear = [1998, 1978, 1996, 2000, 1995, 2010];
console.log(calculateAge(birthYear)); // NaN cz.. 2023-[] is not possible.
const age1 = calculateAge(birthYear[0]);
const age2 = calculateAge(birthYear[1]);
console.log(age1, age2);
const age3 = calculateAge(birthYear[birthYear.length - 1]);
console.log(age3); //13   2023-2010=13

const allAges1=[age1,age2,age3];
const allAges2 = [
  calculateAge(birthYear),
  calculateAge(birthYear[0]),
  calculateAge(birthYear[1]),
  calculateAge(birthYear[birthYear.length - 1]),
];
console.log(allAges1,allAges2); // give all in array.
// [ 25, 45, 13 ] 
//[ NaN, 25, 45, 13 ]


const fruits=['apple', 'banana', 'orange', 'lichi'];
// remove
const popFnc=fruits.pop();
console.log(fruits,popFnc); 
// fruits=[ 'apple', 'banana', 'orange' ] /remove last index
//return value.. lichi
const shiftFnc=fruits.shift();
console.log(fruits,shiftFnc); 
// fruits=[ 'banana', 'orange' ]  /remove 1st index
//return value apple

// add
const pushFnc=fruits.push('Pineapple');
console.log(fruits,pushFnc);
// fruits=[ 'banana', 'orange', 'Pineapple' ] /add last index
// return value 3
const unshiftFnc=fruits.unshift('mango');
console.log(fruits,unshiftFnc);
// fruits=[ 'mango', 'banana', 'orange', 'Pineapple' ] /add 1st index
// return value 4

/*NOTICED THAT !!!: This all functions are change the main array.*/


//  now the array is [ 'mango', 'banana', 'orange','Pineapple' 
// indexOf()
const indexOfFnc1=fruits.indexOf('orange');
const indexOfFnc2=fruits.indexOf('ORANGE');
console.log(indexOfFnc1); // 2
console.log(indexOfFnc2); // -1 (not found)

// includes()
const includeFnc1=fruits.includes('orange');
const includeFnc2=fruits.includes('ORANGE');
console.log(includeFnc1); // true
console.log(includeFnc2); // false (not found)

fruits.push('20');
if(fruits.includes(20)){
    console.log('have 20 in type = number.'); 
    console.log(fruits.includes(20)); // false
}else if(fruits.includes('20')){
    console.log('have 20 in type = string.');
    console.log(fruits.includes('20')); //true
}


