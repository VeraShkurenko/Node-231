const time = () => new Date().toTimeString().substring(0,8);

function delay(timeout, isOk = true)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOk){
                resolve();
            }
            else{
                reject();
            }
        }, timeout);
    });
}

export { delay, time};
