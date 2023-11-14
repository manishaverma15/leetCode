// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
    const memoCache = {}

    return function (...args) {
        const key = JSON.stringify(args);

        if (memoCache[key] !== undefined) {
            return memoCache[key]
        }
        const result = fn(...args)
        memoCache[key] = result

        console.log('result', result);
        return result
    }
}

const memoSum = memoize((a, b) => {
    let callCount = 0
    callCount += 1
    console.log('count', callCount)
    return a + b
})

console.log('memo1', memoSum(4, 3))
console.log('memo2', memoSum(4, 3))
console.log('memo3', memoSum(2, 3))
