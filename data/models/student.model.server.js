const mongoose = require('mongoose');
const studentSchema = require('./student.schema.server');
module.exports = mongoose.model('StudentModel', studentSchema);
