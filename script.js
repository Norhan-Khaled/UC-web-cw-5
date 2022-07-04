function BMI(weight, height) {
  return weight / (height * height);
}
let BMICalculation = BMI(60, 1.6).toFixed(2);

console.log(BMICalculation);

// default parameters and function call
function BMI2(w = 70, h = 1.67) {
  console.log(w / (h * h));
}
BMI2();

function Status(BMICalculation) {
  if (BMICalculation < 18.5) {
    return "you're underweight";
  } else if (BMICalculation >= 18.5 && BMICalculation < 25) {
    return "your weight is normal";
  } else BMICalculation >= 25;
  {
    return "you're overweight";
  }
}
function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = BMI(weight, height);
  let desc = Status(bmi);
  document.getElementById(
    "result"
  ).innerText = `your BMI is ${bmi} and ${desc}`;

  if (desc == "you're underweight") {
    document.getElementById("result").style.color = "orange";
  }
  if (desc == "your weight is normal") {
    document.getElementById("result").style.color = "green";
  }
  if (desc == "you're overweight") {
    document.getElementById("result").style.color = "red";
  }
}
