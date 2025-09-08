import * as fs from 'node:fs/promises';

const filename = './file.txt';

fs.access(filename)
.then(()=> {
    console.log("File exists");
    fs.open(filename, 'r')
    .then(async (file) => {
        for await (let line of file.readLines()){
            console.log(line);
        }
        file.close();
    })
})
 .catch(async (err) => {
    console.log("File does not exist. Creating...");
    let file = await fs.open(filename, 'w');
    await file.write("Hello, World!");
    file.close();
    });