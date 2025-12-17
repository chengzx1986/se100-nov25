const disneyData1 = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
}

q3Answer = Number(disneyData1.open) - Number(disneyData1.high) + Number(disneyData1.low) - Number(disneyData1.close);
console.log(q3Answer.toFixed(2));
document.getElementById("q3").innerText = q3Answer.toFixed(2);