/*
 * *Challenge 1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCk
 */

// Mark data
let markHeight = 1.69;
let markMass = 78;

// John

let johnHeight = 1.95;
let johnMass = 92;

//MarkBMI

markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

//JohnBMI

johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

// comparing the two values to know if marks BMI is greater than john (boolean)

higherBMI = markBMI > johnBMI;
console.log(higherBMI);

/**
 * § Data 2: Marks weights 95 kg and is 1.88 m tall. 
 * John weights 85 kg and is 1.76
m tall.
 */

// Mark data2
let markHeightTwo = 1.88;
let markMassTwo = 95;

// John data 2

let johnHeightTwo = 1.76;
let johnMassTwo = 85;

//MarkBMI2

markBMITwo = markMassTwo / (markHeightTwo * markHeightTwo);
console.log(markBMITwo);

//JohnBMI2

johnBMITwo = johnMassTwo / (johnHeightTwo * johnHeightTwo);
console.log(johnBMITwo );

// comparing the two values to know if marks BMI is greater than john (boolean)

higherBMITwo = markBMITwo > johnBMITwo;
console.log(higherBMITwo,johnBMITwo , markBMITwo);


/**
 * Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
 */

function bmi(){
    if ( markBMI > johnBMI){
   return "Mark's BMI is higher than John's!"
    }
    else{
        "John's BMI is higher than Mark's!"
    }
}

console.log(bmi())

/**
 * Challenge 3
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

const dolphinsScore = [96,108,89];
const koalasScore = [88,91,110];

const dolphinsScoreTwo= [97,112,101];
const koalasScoreTwo= [109,95,123];

const dolphinsScoreThree= [97,112,101];
const koalasScoreThree= [109,95,106];

const averageDolphinsScore = 96 + 108 + 89;
const averagekoalasScore = 88 + 91 + 110;

const averageDolphinsScoreTwo = 96 + 108 + 89;
const averagekoalasScoreTwo = 88 + 91 + 110;
 
const averageDolphinsScoreThree = 96 + 108 + 89;
const averagekoalasScoreThree = 88 + 91 + 110;
 
console.log(averageDolphinsScore,averagekoalasScore,dolphinsScoreTwo,koalasScoreTwo,averageDolphinsScoreThree,averagekoalasScoreThree)

function draw(){
if(averageDolphinsScore > averagekoalasScore){
  return "greater"
}else if (averageDolphinsScore === averagekoalasScore){
return "draw"
}
else{
    return "less"
}
}
 console.log(draw());

function drawCaseTwo(){
if(averageDolphinsScoreTwo > averagekoalasScoreTwo){
  return "greater"
}else if (averageDolphinsScoreTwo === averagekoalasScoreTwo){
return "draw"
}
else{
    return "less"
}
}
 console.log(drawCaseTwo());

function drawCaseThree(){
if(averageDolphinsScoreThree > averagekoalasScoreThree){
  return "greater"
}else if (averageDolphinsScoreThree === averagekoalasScoreThree){
return "draw"
}
else{
    return "less"
}
}
 console.log(drawCaseThree());

 /**
  * Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
  */



/**
 * Coding Challenge 5
 * 


Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
 */


/**
 * coding challenge 6
 * 
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
 *
*/

let calAverage = ( a,b,c) => (a + b + c) / 3;
 let scoreDolphins = calAverage => (44,23,71);
 let scoreKoalas = calAverage => (65,54,49);

 // scoreDolphins = calAverage => (85, 54, 41);
 // scoreKoalas = calAverage => (23, 34 , 27);

  const checkWinner = function(avDolphins , avKoalas){
    if ( avDolphins >= 2 * avKoalas){
            return "Dolphins are smart"
    }else if (avKoalas  >= 2 * avDolphins){
         return " Koalas are smarter"
    }else{
      return " None is smart"
    }
  }

 console.log(checkWinner());
 

 const calAv = (a ,b,c) => (a + b + c) / 3;

 const scoreOfDolphins = calAv => (85, 54 , 41);
 const scoreOfKoalas = calAv => (23, 34 , 27);

 const whoWon =  function(avds ,avks){
  if ( avds >= 2 * avks){
    return "Dolphins are smart"
}else if (avds  >= 2 * avks){
 return " Koalas are smarter"
}else{
return " None is smart"
}
 }
  console.log(whoWon())

  /***
   * Coding Challenge #7
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK
   */

const mark = {
      firstName : "MARK",
      lastName : "MILLER",
      mass : 78,
      height : 1.69,
   //   greaterOrLess : this.calcAgeMarkBmi > this.calcAgeJohnBmi,

      calcAgeMarkBmi : function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
      },
}

const john = {
  firstName : "JOHN",
  lastName : "SMITH",
  mass : 92,
  height : 1.95,
 // greaterOrLess : this.calcAgeJohnBmi > this.calcAgeMarkBmi,

  calcAgeJohnBmi : function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
}

//mark.calcAgeMarkBmi();
//john.calcAgeJohnBmi();

//console.log(mark.bmi,john.bmi);
console.log(mark.calcAgeMarkBmi(),john.calcAgeJohnBmi())





 if(mark.bmi > john.bmi){
   console.log(`so let's check the winner, ${mark.firstName} value which is ${mark.bmi} is higher than
   ${john.firstName} value which is ${john.bmi} `)
 }else if(john.bmi > mark.bmi){
  console.log(`${john.firstName} value is ${john.bmi} and his the winner`)
 }else{
   console.log('No one won!');
}

//github token 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








 

 

