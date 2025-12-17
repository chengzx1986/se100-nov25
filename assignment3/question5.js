const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

if(bacData[3]>bacData[2]){
    if(bacData[4]>100000) {
        console.log("Strong Bullish");
        document.getElementById("q5").innerText = "Strong Bullish";
    }
    else {
        console.log("Bullish");
        document.getElementById("q5").innerText = "Bullish";
    }
}

else if (bacData[3]<bacData[2]) {
    if(bacData[4]>10000) {
        console.log("Strong Bearish");
        document.getElementById("q5").innerText = "Strong Bearish";
    }
    else {
        console.log("Bearish");
        document.getElementById("q5").innerText = "Bearish";
    }
}

else {
    console.log("neutral");
    document.getElementById("q5").innerText = "neutral";
}