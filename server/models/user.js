const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    email2: {
        type: String
    },
    email3: {
        type: String
    },
    address: {
      type: String
    },
    phoneNumber: {
      type: Number
    },
    linkedinUrl: {
        type: String
    }
}, {
   collection: 'users'
})

module.exports = mongoose.model('User', User)