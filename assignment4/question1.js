const amdPrices1 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

// Using Math.max()
// let answer1 = Math.max(...amdPrices); 

// Using for-loop
let answer1 = 0;
for (let i=0;i<amdPrices1.length;i++){
    if (answer1 < amdPrices1[i]) {
        answer1 = amdPrices1[i];
    }
}

console.log("AMD 52-week high is "+answer1);
document.getElementById("q1").innerText = "AMD 52-week high is "+answer1;
