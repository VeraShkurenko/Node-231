import * as fs from 'node:fs/promises';

let filename = "config.ini"

fs.access(filename) 
.then(()=> {
    console.log("File exists");
    fs.open(filename, 'r')
    
    .then(async(file) => {
        let result ={};
        for await (let line of file.readLines()){
            let parts = line.split('=');
            console.log(`'${parts[0]}'`, `'${parts[1]}'`);
        }
        file.close();
    })
})
 .catch(async (err) => {
    console.log("File does not exist.");
});