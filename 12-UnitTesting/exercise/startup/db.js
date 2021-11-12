const mongoose = require('mongoose');
const winston = require('winston');

module.exports = () => {
  mongoose.connect('mongodb://localhost/vidlyNode')
  .then(() => winston.info('Connected to MongoDB...'));
}