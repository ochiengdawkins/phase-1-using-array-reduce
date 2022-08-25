const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;
totalBatteries = batteryBatches.reduce(reducer, 0);
function reducer(total, current){
    return total + current;
}

// Code your solution here
