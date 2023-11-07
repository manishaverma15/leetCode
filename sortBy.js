// Given an array arr and a function fn, return a sorted array sortedArr. 
// You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
// sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

var sortBy = function (arr, fn) {
    return arr.sort(function (a, b) {
        return fn(a) - fn(b);
    });
};

const sortArr = (array) => {
    return array;
}

const array = [5, 7, 2, 6, 1, 3, 4];
const sorted = sortBy(array, sortArr);

console.log('sorted-array', sorted);
