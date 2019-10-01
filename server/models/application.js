const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Application = new Schema({
    name: {
      type: String
    },
    applicationUrl: {
      type: String
    }
}, {
   collection: 'applications'
})

module.exports = mongoose.model('Application', Application)