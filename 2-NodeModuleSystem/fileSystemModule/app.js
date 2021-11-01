const fs = require('fs')

// console.log(fs.readdirSync('./')) 

fs.readdir('./', (err, files) => {
     if(err) console.log(err);
     console.log(files)
})