/**
 * A promise is a standardized approach to dealing with asynchronous events and callbacks.
 */

// Sample

const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
    let state = PENDING;
    let value = null;
    let handler = [];
    let catches = [];

    function resolve(result) {
        if (state !== PENDING) return;

        state = FULLFILLED;
        value = result;

        handler.forEach(h => h(value));
    }

    function reject(err) {
        if (state !== PENDING) return;
        state = REJECTED;
        value = err;

        catches.forEach((c) => c(err));
    }

    this.then = function (callback) {
        if (state === FULLFILLED) {
            callback(value);
        } else {
            handler.push(callback);
        }
    }

    executor(resolve, reject);
}


const doWork = (res, rej) => {
    setTimeout(() => { res("Hello World") }, 1000)
}


let someText = new CustomPromise(doWork);

someText.then((val) => {
    console.log("1st log: ", val);
})

someText.then((val) => {
    console.log("2nd log: ", val);
})

setTimeout(()=> {
    someText.then((val) => {
        console.log("3rd log: ", val);
    })
}, 3000)