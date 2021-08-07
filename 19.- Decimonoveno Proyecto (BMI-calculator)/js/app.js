function calculate(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const BMI = (weight / Math.pow(height/100, 2)).toFixed(2);

    document.getElementById('result').innerHTML = BMI;
    let type = document.getElementById('typeBMI');
    let needle = document.getElementById('needle');

    if (BMI < 18.5){
        type.innerHTML = "Underweight";
        type.className = "type-underweight";
        needle.className = "underweight";
    } else if (BMI < 24.9){
        type.innerHTML = "Normal";
        type.className =  "type-normal";
        needle.className = "normal"
    } else if (BMI < 29.9){
        type.innerHTML = "Overweight";
        type.className = "type-overweight";
        needle.className = "overweight"
    }else if (BMI > 30){
        type.innerHTML = "Obese";
        type.className = "type-obese";
        needle.className = "obese"
    }
}