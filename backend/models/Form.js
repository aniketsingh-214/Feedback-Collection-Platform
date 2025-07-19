const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: String,
  type: { type: String, enum: ['text', 'multiple-choice'], default: 'text' },
  options: [String],
});

const ResponseSchema = new mongoose.Schema({
  answers: [String],
  submittedAt: { type: Date, default: Date.now },
});

const FormSchema = new mongoose.Schema({
  title: String,
  questions: [QuestionSchema],
  responses: [ResponseSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Form', FormSchema);
