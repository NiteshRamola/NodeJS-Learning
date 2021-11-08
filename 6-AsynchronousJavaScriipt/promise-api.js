// Settled Promises

// const p = Promise.resolve({id: 1})
// p.then(res => console.log(res))

// const er = Promise.reject(new Error('Rejected...'));
// er.catch(err => console.log(err.message))

// Running Parallel promises

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Promise 1...')
    resolve(1)
  }, 2000);
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Promise 2...')
    resolve(2)
  }, 2000);
})

Promise.all([p1, p2]).then(res => console.log(res)).catch(err => console.log(err.message))