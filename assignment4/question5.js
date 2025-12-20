const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let answer5 = 0;

let closingDisneyPriceDay1 = Number(disneyData[0].close);
let closingDisneyPriceDay2 = Number(disneyData[1].close);

let averageClosing = (closingDisneyPriceDay1 + closingDisneyPriceDay2) / 2;
answer5 = Math.round(averageClosing*100)/100; // Doing this because .toFixed() does not round up. Have googled and confirmed it is inconsistent.

console.log("Average closing price of Disney is " + answer5);
document.getElementById("q5").innerText = "Average closing price of Disney is " + answer5;
