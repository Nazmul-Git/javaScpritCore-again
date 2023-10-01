/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsFirst=97;
const dolphinsSecond=112;
const dolphinsThird=101;

const koalasFirst=109;
const koalasSecond=95;
const koalasThird=106;

const dolphinsAVG= (dolphinsFirst+dolphinsSecond+dolphinsThird)/3;
const koalasAVG= (koalasFirst+koalasSecond+koalasThird)/3;
// console.log(dolphinsAVG,koalasAVG);

if(dolphinsAVG>koalasAVG && dolphinsAVG>=100){
    console.log('dolphins winner');
}else if(koalasAVG>dolphinsAVG && koalasAVG>=100){
    console.log('Koalas is winner ');
}else if(koalasAVG==dolphinsAVG && koalasAVG>=100 && dolphinsAVG>=100){
    console.log('score is draw');
}else{
    console.log('No team winner.')
}

// using function

const calculationAVG=(a,b,c)=>(a+b+c)/3;

const dolphinScore=calculationAVG(44,23,71);
const koalasScore=calculationAVG(65,54,49);
// console.log(dolphinScore, koalasScore);




// using array & loop

const dolphin=[97,112,101];
const kolas=[109,95,109];

const calculateAverage=(arr)=>{
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    console.log(sum)
    return sum/arr.length;
}
console.log(calculateAverage(dolphin), calculateAverage(kolas));