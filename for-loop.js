const jonas=[
    'jonas',
    'khanas',
    2023-1998,
    'teacher',
    ['abul,kabul, labul'],
    true
];

const buildArr=[];
for(let i=0; i<jonas.length; i++){
    // console.log(jonas[i], typeof jonas[i]);
    
    buildArr[i]= typeof jonas[i];

    buildArr.push(typeof jonas[i]);
}
console.log(buildArr);

// ----------------
const arr=[1995,1999,1971,2000,2010];
const age=[];
for(let i=0; i<arr.length; i++){
    age.push(2023-arr[i])
}
console.log(age);



//  continue
// --------ONLY STRING---------
for(let i=0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
    
}

//  break
// --------Break with number---------
for(let i=0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'number') break;
    console.log(jonas[i], typeof jonas[i]);
    
}

//  loop reverse
const jonas2=[
    'jonas',
    'khanas',
    2023-1998,
    'teacher',
    ['abul,kabul, labul']
    
];
for(let i=jonas2.length-1; i>=0; i--){
    console.log(jonas2[i]);
}