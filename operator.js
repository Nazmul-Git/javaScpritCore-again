const marksMass= 78;
const marksHeight=1.69;
const johnMass=92;
const johnHeight=1.95;

const markHigherBMI= (marksMass/(marksHeight**2))>(johnMass/(johnHeight*johnHeight));
console.log(markHigherBMI); // true
