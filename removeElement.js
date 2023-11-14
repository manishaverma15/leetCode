// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeElement = function(nums, val) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

const arr = [1, 1, 1, 2, 2, 3, 3, 4, 5];
const uniqueCount = removeElement(arr,3);
console.log('Modified Array:', arr.slice(0, uniqueCount));