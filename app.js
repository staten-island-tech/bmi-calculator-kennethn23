function bmiCalculator(userHeight, userWeight) {
    return ((userWeight / (userHeight * userHeight)) * 10000);
}

function bmiRange() {
    if (bmi < 18.5){
        return ("UNDERWEIGHT");
    } else if (bmi < 25){
        return ("HEALTHY");
    } else if (bmi < 30){
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