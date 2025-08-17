function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.round(bmi);
    console.log("Your BMI is: " + bmi);
    return bmi;
}
