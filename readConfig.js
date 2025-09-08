import * as fs from 'node:fs/promises';

let filename = "config.ini";

fs.access(filename)
.then(async () => {
    try {
        console.log("File exists and is accessible");

        const file = await fs.open(filename, 'r');
        let result = {};

        for await (let line of file.readLines()) {
            if (line.trim() === "") continue; 
            let parts = line.split('=');
            if (parts.length < 2) continue; 
            let key = parts[0].trim();
            let value = parts.slice(1).join('=').trim();
            result[key] = value;
            console.log(`${key} = ${value}`);
        }

        file.close();

    } catch (err) {
        console.error("Error while reading the file:", err.message);
    }
})
.catch(() => {
    console.log("File does not exist or is not accessible.");
});
