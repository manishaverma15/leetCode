// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function (val1, val2) {
    const resolvedVal1 = await val1;
    const resolvedVal2 = await val2;

    return resolvedVal1 + resolvedVal2;
};

async function addPromises() {
    try {
        const addPromiseValue = await addTwoPromises(3, 2);
        console.log('add', addPromiseValue);
    } catch (error) {
        console.error(error.message);
    }
}

addPromises();
