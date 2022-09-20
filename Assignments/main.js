/**
 * first assignment is to assign value to a variable
 * @param(string) country
 * 
 * @param(string) continent
 * 
 * @param(string) population
 * 
 * 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

 */

let country = "Nigeria";
 
let continent = "Africa";

let population = 270 + "million"

/**
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

johnBMI = markMass / (johnHeight * johnHeight);
console.log(johnBMI);


/**
 * second assignment is to assign value to a variable
 * @param(bolean) isIsland
 * 
 * 
 1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
 */

let isIsland = true;

