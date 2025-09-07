// Удосконалити задачу розрахунку ціни товару за курсом валюти
// - збільшено межу Math.random() * 20000
// - введено загальне обмеження у 5 секунд
// - якщо задачі не встигають завершитись за 5с, вони скасовуються примусово

import { delay, time } from "./helper.js";
import { EventEmitter } from 'node:events';

const processor = new EventEmitter();

function onRateEvent(rate) {
    processor.rate = rate;
    console.log(time(), "Got rate = ", rate);
    processor.emit('data');
}
function onPriceEvent(price) {
    processor.price = price;
    console.log(time(), "Got price = ", price);
    processor.emit('data');
}
function onDataEvent() {
    if(typeof processor.rate  !== 'undefined' && 
       typeof processor.price !== 'undefined') {
            const hrn = processor.rate * processor.price;
            console.log(`Final price: ${processor.price} x ${processor.rate} = ${hrn}`);
        }
}

processor.on('rate',  onRateEvent );
processor.on('price', onPriceEvent);
processor.on('data',  onDataEvent );

const tasks = Promise.all([
    delay(Math.random() * 20000).then(() => processor.emit('rate', 42)),
    delay(Math.random() * 20000).then(() => processor.emit('price', 100)),
]);

const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout: tasks cancelled after 5s")), 5000);
});

try {
    await Promise.race([tasks, timeout]);
} catch (err) {
    console.log(time(), err.message);
}

processor.off('rate',  onRateEvent );
processor.off('price', onPriceEvent);
processor.off('data',  onDataEvent );
