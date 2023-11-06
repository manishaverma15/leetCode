// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('complete');
            console.log('completed');
        }, millis);
    });
}

async function main() {
    console.log('before start')
   await sleep(4000);
    console.log('after sleep')
}

main();