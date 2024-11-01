function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // convert cm to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height values.");
      return;
  }

  const bmi = weight / (height * height);
  const bmiValue = bmi.toFixed(1);

  document.getElementById("bmiValue").innerText = bmiValue;
  updateIndicator(bmi);
}

function updateIndicator(bmi) {
  const indicator = document.getElementById("indicator");
  let position = 0; // default position

  if (bmi < 18.5) {
      position = 5; // underweight
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      position = 35; // normal
  } else if (bmi >= 25 && bmi <= 29.9) {
      position = 65; // overweight
  } else {
      position = 95; // obese
  }

  indicator.style.left = `${position}%`;
}
