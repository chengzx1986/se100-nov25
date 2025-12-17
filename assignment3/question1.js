const msftData1 = [190.15, 194.21, 191.07, 190.44, 200.15]

let sum = 0;

for (let i=0; i<msftData1.length; i++) {
    sum+=msftData1[i];
}

q1Answer = sum / msftData1.length;
console.log(q1Answer);
document.getElementById("q1").innerText = q1Answer;