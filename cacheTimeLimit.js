// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds.
//  Once the duration has elapsed, the key should be inaccessible. The method should return true 
//  if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten
// if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

class TimeLimitedCache {
    obj = {};

    set(key, value, duration) {
        if (this.obj[key]) {
            clearTimeout(this.obj[key].timeoutId)
            delete this.obj[key]
        }

        const timeoutId = setTimeout(() => {
            delete this.obj[key]
        }, duration);


        this.obj[key] = {
            value: value,
            duration: duration,
            timeoutId
        }

        return true;
    }
    get(key) {
        if (key) {
            return this.obj[key]?.value || -1;
        }
    }

    count() {
        return Object.keys(this.obj).length;
    }
}

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




