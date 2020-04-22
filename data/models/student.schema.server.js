const mongoose = require('mongoose');
module.exports = mongoose.Schema({_id: Number,username: String,  password: String, firstName: String,
                        lastName: String,gradYear: Number,scholarship: Number}, {collection: 'students'});

