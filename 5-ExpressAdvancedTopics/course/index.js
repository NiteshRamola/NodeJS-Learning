const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');

app.set('view engine', 'pug');
app.set('views', './views');

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', home);
app.use('/api/courses', courses);

// Third-party middleware
app.use(helmet());

// custom middleware

app.use(logger);

if(app.get('env') === 'development') {
    startupDebugger('Morgan enabled...');
    app.use(morgan('tiny'));
    dbDebugger('Morgan enabled...');
}

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});