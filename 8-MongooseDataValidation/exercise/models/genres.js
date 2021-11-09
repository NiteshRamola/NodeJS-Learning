const mongoose = require('mongoose')

const genresSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
  }
})

const Genre = mongoose.model('Genre', genresSchema);

module.exports = Genre;