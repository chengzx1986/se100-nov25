// Modify the code below:

const amdPrices4 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// Sort Numerically. Checked online for method.
amdPrices4.sort(function(a, b) {
  return a - b;
});

// Since the array is already sorted, I can just print directly. To match the expected output
document.getElementById("q6").innerText = "The three lowest prices are " + amdPrices4[0] + " , " + amdPrices4[1] + " and " + amdPrices4[2];
console.log ("The three lowest prices are " + amdPrices4[0] + " , " + amdPrices4[1] + " and " + amdPrices4[2]);

// Alteratively, we can use the for-loop to check and push into a separate array. Just for fun.

// 4th Lowest Price is 4th element in the sorted array
let forthLowest = amdPrices4[3];

let data = [];
let price = 0;

for (price of amdPrices4){
	if (price < forthLowest) {
        data.push(price);
    }
}

/*
document.getElementById("q6").innerText = "The three lowest prices are " + data;
console.log ("The three lowest prices are " + data);
*/
