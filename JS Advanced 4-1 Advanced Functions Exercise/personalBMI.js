function bodyMassIndexCalculator(name, age, weight, height) {
    let bmiFormula = Math.round(weight / (Math.pow(height, 2)) * 10000);
    function bmiStatus(bmi) {
        if (bmi <= 18.5) {
            return "underweight"
        } else if (bmi > 18.5 && bmi < 25) {
            return "normal"
        }
        else if (bmi >= 25 && bmi < 30) {
            return "overweight"
        }
        else if (bmi >= 30) {
            return "obese"
        }
    }

    let output = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmiFormula,
        status: bmiStatus(bmiFormula)
    };
    if (bmiStatus(bmiFormula) === "obese") {
        output.recommendation = "admission required"
    }
    return output
}
let info = bodyMassIndexCalculator('Petkan', 20, 80, 178);
console.log(info)