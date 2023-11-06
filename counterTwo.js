// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
    let counter = init;

    return {
        increment: () => {
            counter = counter + 1;
            return counter
        },

        decrement: () => {
            if (counter > 0) {
                counter = counter - 1;
                return counter;
            } else {
                counter = counter -1 
            }
            return counter;
        },

        reset: () => {
            counter = init;
            return counter;
        }
    }
};

const counter = createCounter(-5);
// console.log('increment', counter.increment())
// console.log('increment', counter.increment())
console.log('decrement', counter.decrement())
console.log('decrement', counter.decrement())

console.log('decrement', counter.decrement())
// console.log('reset', counter.reset())

// console.log('reset', counter.reset())
