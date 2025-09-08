import * as fs from 'node:fs/promises';

const subdir = "subdir";
fs.access(subdir)
.then(async () => {
    console.log("Subdir exists");
    // await fs.copyFile('./hello.js', './subdir/copy3.txt');
    // await fs.rename("./subdir/copy.txt", './subdir/copy1.txt')
    for await (let d of await fs.opendir(subdir)){
        for(let prop in d){
            console.log(`${prop} = ${d[prop]}`);
        }
        console.log('----------------------------');
    }
    // fs.unlink('./subdir/copy1.txt'); //видалення файлу
    fs.rmdir('./dir2');
})
.catch((err) => {
    console.log("Subdir does not exist", err);
    fs.mkdir(subdir)
    .then(() => console.log(subdir, "created"));
})