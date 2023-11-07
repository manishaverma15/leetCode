// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

var cancellable = function (fn, args, t) {
    fn(...args);

    const interval = setInterval(() => {
        fn(...args);
    }, t);

    const cancel = () => {
        clearInterval(interval)
    }
    return cancel;
};

const doThis = (x) => {
    console.log("value-x", x + 4)
}

const cancelled = cancellable(doThis, [2], 1000)

setTimeout(() => {
    cancelled();
    console.log("Timer has been canceled.");
}, 7000);
