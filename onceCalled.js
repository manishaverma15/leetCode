// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function (fn) {
    let calledOnce = false;

    return function (...args) {
        if (!calledOnce) {
            calledOnce = true
           return fn(...args)
        }
        return undefined;
    }
};

function newFunction(a, b, c) {
    return a + b + c;
}

const functionCalledOnce = once(newFunction);

console.log('once-called', functionCalledOnce(2, 4, 8))
console.log('second-call', functionCalledOnce(4, 6, 2))
console.log('second-call', functionCalledOnce(4, 1, 2))
