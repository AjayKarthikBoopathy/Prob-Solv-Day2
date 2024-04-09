// Write a function that finds the maximum and minimum elements in an array.

// function findMinMax() {
//     let Arr = [50, 60, 20, 10, 60, 5, 40];
//     let minValue = Infinity;
//     let maxValue = -Infinity;
 
//     for (let item of Arr) {
 
//         // Find minimum value
//         if (item < minValue)
//             minValue = item;
 
//         // Find maximum value
//         if (item > maxValue)
//             maxValue = item;
//     }
 
//     console.log("Minimum element is:" + minValue);
//     console.log("Maximum element is:" + maxValue);
// }
 
// findMinMax();

//

function findMinMax() {
    let Arr = [50, 60, 20, 10, 60, 5, 40];
    let maxValue = Arr[0];
    let minValue = Arr[Arr.length - 1];
 
    for (let item of Arr) {
 
        // Find minimum value
        if (item < minValue)
            minValue = item;
 
        // Find maximum value
        if (item > maxValue)
            maxValue = item;
    }
 
    console.log("Minimum element is:" + minValue);
    console.log("Maximum element is:" + maxValue);
}
 
findMinMax();
