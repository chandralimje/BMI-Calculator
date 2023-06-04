var weight, height, measure, bmi, error;

function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  error = "please enter some values";
  height /= 100;
  height *= height;
  bmi = weight / height;
  bmi = bmi.toFixed(1);

  if (bmi <= 18.5) {
    measure = " Your BMI is " + bmi + " which means " + " you are Underweight ";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    measure = " Your BMI is " + bmi + " which means " + " you are Normal ";
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = " Your BMI is " + bmi + " which means " + " you are Overweight ";
  } else if (bmi >= 30) {
    measure = " Your bmi is " + bmi + " which means " + " you are Obese ";
  }

  if (weight === 0) {
    document.getElementById("results").innerHTML = error;
  } else if (height === 0) {
    document.getElementById("results").innerHTML = error;
  } else {
    document.getElementById("results").innerHTML = measure;
  }
  if (weight < 0) {
    document.getElementById("results").innerHTML =
      "Negative Values not Allowed";
  }
}
