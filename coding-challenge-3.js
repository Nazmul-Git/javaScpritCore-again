const callTip=(bill)=>{
    return bill>=50 && bill<=300? bill*0.15:bill*0.2;

}
const bill=[125,555,44];
const tip=[callTip(bill[0]),callTip(bill[1]),callTip(bill[2])];
console.log(bill,tip);
const totals=[bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];

console.log(totals);