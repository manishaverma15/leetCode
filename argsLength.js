// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function (...args) {
    return (args.length);
}

const argumentsPassed = argumentsLength(2, 3, 4, 5, 12)
console.log('length', argumentsPassed)