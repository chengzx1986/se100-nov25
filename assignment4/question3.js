const amdPrices3 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let answer3 = 0;
let arrayAverage = 0;

// Find Average Function
function findAverage(numbers) {
    let sum = 0;

    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

arrayAverage = findAverage(amdPrices3);

for (let i=0;i<amdPrices3.length;i++) {
    if(amdPrices3[i]>arrayAverage) {
        answer3++;
    }
}

console.log("Number of days AMD was above the 7-day SMA is: " + answer3);
document.getElementById("q3").innerText = "Number of days AMD was above the 7-day SMA is: " + answer3;
