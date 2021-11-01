const EventEmitter = require('events');

let url = 'http://random.zxy/log';

class Logger extends EventEmitter {
    log(msg){
        console.log(msg);
    
        this.emit('messageLogged', {id:1, url:'https://fsj.com/fjd'});
    }
}


module.exports = Logger;