const doWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World")
    }, 1000);
}

// This one should run after the first promise reolves.
const doOtherWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("How are you?")
    }, 3000);
}

let someText = new Promise(doWork);

// We could also chain .then's
let someOtherText = someText
.then((val) =>  {
    console.log("1st log: ", val)
    return new Promise(doOtherWork)
}
)

someOtherText.then((val) => {
    console.log(val);
})