// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function (arr, fn) {
    const incrementArr = []
    for (let i = 0; i < arr.length; i++) {
        incrementArr.push(fn(arr[i], i));
    }
    return incrementArr;
};

const arr = [2, 3, 4, 5, 6, 12]
const incrementedArray = map(arr, (item) => item + 1)
console.log(incrementedArray);