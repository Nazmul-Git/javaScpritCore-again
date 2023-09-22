const marksMass= 78;
const marksHeight=1.69;
const johnMass=92;
const johnHeight=1.95;

const markHigherBMI= (marksMass/(marksHeight**2))>(johnMass/(johnHeight*johnHeight));
// console.log(markHigherBMI); // true

console.log("Mark's BMI is higher than John's! ???");
const marksBMI=marksMass/(marksHeight**2);
const johnBMI=johnMass/(johnHeight*johnHeight)
if(marksBMI> johnBMI){
    console.log(`marks bmi ${marksBMI} is higher than john ${johnBMI} !`);
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${marksBMI}!`)
}