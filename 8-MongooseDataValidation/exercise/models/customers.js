const mongoose = require('mongoose')

const customersSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
  },
  isGold: {
    type: Boolean,
    default: false
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  }
})

const Customer = mongoose.model('Customer', customersSchema);


module.exports = Customer;