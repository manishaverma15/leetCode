// Given an object or an array, return if it is empty.

// -An empty object contains no key-value pairs.
// -An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse

var isEmpty = function (obj) {
    if (Array.isArray(obj) && obj.length === 0) {
        console.log('obj', obj)
        return true;
    } else if (typeof obj === 'object' && Object.keys(obj).length === 0) {
        console.log('obj-1', obj)
        return true;
    } else {
        return false;
    }
};

isEmpty([1, 2, 3, 4])
isEmpty({ "a": 1, "b": 3 })
isEmpty({ })
isEmpty([null, false, 0])

