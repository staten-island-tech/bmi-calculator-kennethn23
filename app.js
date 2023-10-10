function bmiCalculator(userHeight, userWeight) {
    return ((userWeight / (userHeight * userHeight)) * 10000);
}

function bmiRange(bmiCalculator) {
    if (bmiCalculator < 18.5){
        return ("UNDERWEIGHT");
    } else if (bmiCalculator < 25){
        return ("HEALTHY");
    } else if (bmiCalculator < 30){
        return ("OVERWEIGHT");
    } else {
        return ("OBESE");
    }
}

let userName = prompt("Enter your name");
let userHeight = Number(prompt("Enter your height, in cm"));
let userWeight = Number(prompt("Enter your weight, in kg"));

const bmi = bmiCalculator(userHeight, userWeight);
const range = bmiRange(userHeight, userWeight);

console.log("Name: " + userName);
console.log("Your BMI is " + bmi);
console.log("You are " + range);