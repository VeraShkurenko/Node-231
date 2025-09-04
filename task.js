import {time, delay} from './helper.js';

console.log(time() + " start");
delay(4000)
.then(() => {console.log(time() + " resolved");})
.catch(() => {console.log(time() + " rejected");})
.finally(() => {console.log(time() + " finalized");})

console.log(time() + " after delay");




console.log(time() + " start2");
try{
    await delay(2000, false);
console.log(time() + " resolved2");
}
catch (err){
console.error(time() + " rejected 2");
}
finally{
    console.log(time() + " finalized 2");
}
console.log(time() + " after delay 2");


const task = delay(2000);
console.log("Work...");
await task;