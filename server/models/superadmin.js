const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let SuperAdmin = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
        type: String
    }
}, {
   collection: 'superadmins'
})

module.exports = mongoose.model('SuperAdmin', SuperAdmin)