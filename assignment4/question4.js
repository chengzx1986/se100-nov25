const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let answer4 = 0;

let closingPriceDay1 = msftData[0][3];
let closingPriceDay2 = msftData[1][3];

answer4 = (closingPriceDay1 + closingPriceDay2) / 2;

console.log("Average closing price of MSFT is " + answer4.toFixed(2));
document.getElementById("q4").innerText = "Average closing price of MSFT is " + answer4.toFixed(2);

