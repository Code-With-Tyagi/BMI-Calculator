let btn = document.querySelector("#btn");
let result = document.querySelector("p");

btn.addEventListener("click", () => {
    let height = document.querySelector("#height").value;
    console.log(typeof(height));
    let weight = document.querySelector("#weight").value;

    // Convert to numbers
    height = parseFloat(height);
    weight = parseFloat(weight);

    if (height > 0 && weight > 0) {
        let BMI = (weight / Math.pow(height / 100, 2)).toFixed(2); // Convert cm to meters
        result.textContent = `Your BMI is ${BMI}`;
        console.log(BMI);
    } else {
        result.textContent = "Please enter valid height and weight.";
    }
});
