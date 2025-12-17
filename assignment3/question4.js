const disneyData2 = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
}

let number = 1512311;
disneyData2.volume = number.toString();
console.log(JSON.stringify(disneyData2));

document.getElementById("q4").innerText = JSON.stringify(disneyData2);