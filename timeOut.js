// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, 
// specifically at cancelT ms. In that case, fn should never be called.

var cancellable = function (fn, args, t) {

    const timeOut = setTimeout(() => {
        fn(...args);
    }, t);

    const cancel = () => {
        clearTimeout(timeOut)
    }

    return cancel;
};

const doThis = (x) => {
    console.log("value-x", x * 4)
}

const cancelled = cancellable(doThis, [2], 2000)

console.log('result', cancelled)