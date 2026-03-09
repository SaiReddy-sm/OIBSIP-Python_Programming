function calculateBMI(){

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

if(weight === "" || height === ""){

alert("Please enter weight and height");
return;

}

let bmi = weight / (height * height);

bmi = bmi.toFixed(2);

let category = "";

if(bmi < 18.5){

category = "Underweight";

}
else if(bmi >= 18.5 && bmi < 24.9){

category = "Normal Weight";

}
else if(bmi >= 25 && bmi < 29.9){

category = "Overweight";

}
else{

category = "Obese";

}

document.getElementById("bmi-result").innerHTML = "BMI: " + bmi;

document.getElementById("bmi-category").innerHTML = "Category: " + category;

}
