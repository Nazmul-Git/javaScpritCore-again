const person1={
    firstName:'sam',
    lastName:'ahmed',
    age:30,
    programmer:true,
    skill:['c','javascript','react js','node js','mongodb'],
    address:{
        homeTown: 'dhaka, Bangladesh',
        currentAddress:'Finland'
    },
    calculateAge:(year)=>{
        return 2023-year;
    },
    retirement:()=>{
        return `${this.firstName} is a programmer ??${this.programmer}`
    }
} 


// console.log(person1.firstName, person1.age); // Dot notation

// console.log(person1['firstName'], person1['age']); // Bracket notation

// 
const nameKey='Name';
// console.log(person1['first' + nameKey]);
// console.log(person1['last' + nameKey]);
// console.log(person1.'first' + nameKey);

// this situation dot notation is not possible


const skills=person1.skill[2];
// console.log(skills);

const skill2=person1['skill'];
// console.log(skill2[2]);

// console.log(person1.address.homeTown);
const addr=person1['address'];
// console.log(addr['currentAddress']);

// console.log(person1.calculateAge(1998));
// console.log(person1['calculateAge'](1998));

console.log(person1.retirement())

