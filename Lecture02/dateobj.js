//Date function return milliseconds that have elaped 
//since midnight on January 1, 1970, UTC
//this example takes 2 seconds to run
const strat = Date.now();

console.log('starting time...');
// expected output: starting timer...

setTimeout(() => {
    const millis = Date.now() - strat;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    //expected output: seconds elapsed = 2
},2000);