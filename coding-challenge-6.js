
const data1=[17,21,23];
const data2=[12,-9,23,33];

const givenCelcious=(arr)=>{
    let str='';
    for(let i=0;i<arr.length; i++){
        str+=`...${arr[i]}C  ${i+1} days`;
    }
    
    return str;
}
console.log(givenCelcious(data1));
console.log(givenCelcious(data2));