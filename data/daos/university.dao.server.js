const studentModel = require('../models/student.model.server');
const quizModel = require('../models/quiz.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');

const truncateDatabase = () => {
    return answerModel.deleteMany({})
        .then(() => studentModel.deleteMany({}))
        .then(() => questionModel.deleteMany({}))
        .then(() => quizModel.deleteMany({}));
};


const populateDatabase = () => {
    createStudent({_id: 123,firstName: "Alice",lastName: "Wonderland",username: "alice",password: "alice",
                    gradYear: 2020,scholarship: 15000});
    createStudent({_id: 234,firstName: "Bob",lastName: "Hope",username: "bob",password: "bob",
                    gradYear: 2021,scholarship: 12000
    });

    createQuestion({ _id: 321, question: "Is the following schema valid?", points: 10,
                    questionType: "TRUE_FALSE", trueFalse: {isTrue: false}});

    createQuestion({_id: 432,question: "DAO stands for Dynamic Access Object.", points: 10,
                    questionType: "TRUE_FALSE",trueFalse: {isTrue: false}});

    createQuestion({_id: 543,question: "What does JPA stand for?",points: 10, questionType: "MULTIPLE_CHOICE",
        multipleChoice: {choices: "Java Persistence API," +
                                  "Java Persisted Application," +
                                  "JavaScript Persistence API," +
                                  "JSON Persistent Associations",
                                   correct: 1
                        }  });

    createQuestion({_id: 654,question: "What does ORM stand for?", points: 10,
                    questionType: "MULTIPLE_CHOICE",
                     multipleChoice: {choices: "Object Relational Model," +
                                               "Object Relative Markup," +
                                               "Object Reflexive Model," +
                                               "Object Relational Mapping",
                                        correct: 4}});


    createAnswer({_id: 123,trueFalseAnswer: true, student: 123, question: 321});
    createAnswer({_id: 234,trueFalseAnswer: false, student: 123,question: 432});
    createAnswer({_id: 345,multipleChoiceAnswer: 1, student: 123,question: 543});
    createAnswer({_id: 456,multipleChoiceAnswer: 2, student: 123, question: 654});
    createAnswer({_id: 567,trueFalseAnswer: false,student: 234,question: 321});
    createAnswer({_id: 678,  trueFalseAnswer: true, student: 234, question: 432});
    createAnswer({_id: 789,multipleChoiceAnswer: 3, student: 234, question: 543});
    createAnswer({ _id: 890,multipleChoiceAnswer: 4,student: 234,  question: 654});
};

const createStudent = (student) => {
    return studentModel.create(student);
};

const deleteStudent = (id) => {
    return studentModel.deleteOne({_id: id});
};

const createQuestion = (question) => {
    return questionModel.create(question);
};

const deleteQuestion = (id) => {
    return questionModel.deleteOne({_id: id});
};

const createAnswer = (answer) => {
    return answerModel.create(answer);
};


const answerQuestion = (studentId, questionId, answer) => {
    return answerModel.create({
        _id: answer._id,
        multipleChoiceAnswer: answer.multipleChoiceAnswer,
        trueFalseAnswer: answer.trueFalseAnswer,
        student: studentId,
        question: questionId
    })
};

const deleteAnswer = (id) => {
    return answerModel.deleteOne({_id: id});
};

const findAllStudents = () => {
    return studentModel.find();
};

const findStudentById = (studentId) => {
    return studentModel.findById(studentId);
};

const findAllQuestions = () => {
    return questionModel.find();
};

const findQuestionById = (questionId) => {
    return questionModel.findById(questionId);
};

const findAllAnswers = () => {
    return answerModel.find();
};

const findAnswerById = (answerId) => {
    return answerModel.findById(answerId);
};

const findAnswersByStudent = (studentId) => {
    return answerModel.find({student: studentId});
};

const findAnswersByQuestion = (questionId) => {
    return answerModel.find({question: questionId});
};

module.exports = {
    truncateDatabase,
    populateDatabase,
    createStudent,
    deleteStudent,
    createQuestion,
    deleteQuestion,
    answerQuestion,
    deleteAnswer,
    findAllStudents,
    findStudentById,
    findAllQuestions,
    findQuestionById,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion
};