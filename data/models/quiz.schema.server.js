const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
const quizSchema = mongoose.Schema ({
    questions: [{
        type: Number,
        ref: 'QuestionModel'
    }]
}, { collection : 'quiz' });

module.exports = quizSchema;