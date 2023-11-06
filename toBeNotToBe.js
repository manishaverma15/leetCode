// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function (val) {
    let checkValue = val;
    console.log('val', checkValue)
    return {
        toBe: (value) => {
            if (value === checkValue) {
                if (value !== null) {
                    return true;
                } else {
                    console.log("Error: Expected value should not be null");
                    return false;
                }
            } else {
                console.log("Error: Not Equal");
                return false;
            }
        },
        notToBe: (value) => {
            if (value !== checkValue) {
                return true
            }
            else {
                console.log("Error: Equal")
                return false;
            }
        }

    }
};


const toBeExpected = expect(4).toBe(null);
const notToBeExpected = expect(5).notToBe(5);

console.log('toBe', toBeExpected);
console.log('notToBe', notToBeExpected);