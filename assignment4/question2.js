const amdPrices2 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sum = 0;
let answer2 = 0;

for (let i=0; i<amdPrices2.length; i++) {
  sum += amdPrices2[i];
}

answer2 = sum / amdPrices2.length;

console.log("The 7-day SMA of AMD is " + answer2.toFixed(2));
document.getElementById("q2").innerText = "The 7-day SMA of AMD is " + answer2.toFixed(2);