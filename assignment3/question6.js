const disneyData3 = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
}

if(disneyData3.close > disneyData3.open) {
    if(disneyData3.volume > 100000) {
        console.log("Strong Bullish");
        document.getElementById("q6").innerText = "Strong Bullish";
    }
    else {
        console.log("Bullish");
        document.getElementById("q6").innerText = "Bullish";
    }
}
else if (disneyData3.close < disneyData3.open){
    if(disneyData3.volume > 10000) {
        console.log("Strong Bearish");
        document.getElementById("q6").innerText = "Strong Bearish";
    }
    else {
        console.log("Bearish");
        document.getElementById("q6").innerText = "Bearish";
    }
}
else {
    console.log("neutral");
    document.getElementById("q6").innerText = "neutral";
}