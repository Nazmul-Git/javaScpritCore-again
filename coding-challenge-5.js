const bill=[22,295,170,551,105,55,1000];
const tips=[];
const total=[];

const calculateTIPS=(bill)=>{
    return bill>=50 && bill<=300?bill * 0.15 : bill*0.2;
    
}
for(let i=0; i< bill.length; i++){
    const tip=calculateTIPS(bill[i]);
    tips.push(tip);
    total.push(tip+bill[i]);
}
console.log(bill,tips,total);