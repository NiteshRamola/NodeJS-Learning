const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
        reject(new Error('fail'));
    }, 2000);
});

p.then(result => console.log(result)).catch(error => console.log(error.message));