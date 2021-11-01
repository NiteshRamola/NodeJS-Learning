const Logger = require('./logger')
const logger = new Logger();

// Listen to an event
logger.on('messageLogged', (arg) => {
    console.log(arg)
})

logger.log('message')
