const mongoose = require('mongoose');
const multipleChoiceSchema = mongoose.Schema({choices: String,correct: Number});
module.exports = multipleChoiceSchema;