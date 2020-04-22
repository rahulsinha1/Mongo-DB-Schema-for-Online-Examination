const mongoose  = require('mongoose');
const studentSchema = require('./student.schema.server');
const questionSchema = require('./question.schema.server');
module.exports = mongoose.Schema({_id: Number,trueFalseAnswer: Boolean, multipleChoiceAnswer: Number,
                 student: {type: Number, ref: 'StudentModel'},question: {type: Number, ref: 'QuestionModel'},}, {collection: 'answers'});

