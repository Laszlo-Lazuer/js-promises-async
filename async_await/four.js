/**
 * Syntactic Sugar
 * Features designed to make writing code more efficient,
 * clean, or understandable but, in reality, don't let you do
 * things that you couldn't already accomplish before in
 * another way.
 */

const doWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World")
    }, 1000);
}

const doOtherWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("How are you?")
    }, 3000);
}

async function doAllTheWork() {
    const someText = new Promise(doWork);
    const text1 = await someText;
    console.log(text1);

    const otherText = new Promise(doOtherWork);
    const text2 = await otherText;
    console.log(text2);
}

doAllTheWork();

console.log("Done!");