
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.


var TimeLimitedCache = function () {
    obj = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let result = false
    if (obj[key]) {
        clearTimeout(obj[key].timeoutId)
        delete obj[key]
        result = true
    }

    const timeoutId = setTimeout(() => {
        delete obj[key]
    }, duration);


    obj[key] = {
        value: value,
        duration: duration,
        timeoutId
    }

    return result;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return obj[key]?.value || -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return Object.keys(obj).length;
};

const object1 = new TimeLimitedCache();

object1.set(1, 23, 5000)
object1.set(2, 123, 2000)
object1.set(2, 34, 2000)


setTimeout(() => {
    console.log("value1", object1.get(1))
    console.log("value2", object1.get(2))

    console.log("Timer has been canceled.");
}, 4000);

console.log("value1", object1.get(1))
console.log("value2", object1.get(2))
console.log('count', object1.count())
