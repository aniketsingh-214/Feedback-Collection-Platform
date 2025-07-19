const Form = require('../models/Form');

exports.createForm = async (req, res) => {
  const { title, questions } = req.body;
  const form = await Form.create({ title, questions, createdBy: req.userId });
  res.status(201).json(form);
};

exports.submitResponse = async (req, res) => {
  const { formId } = req.params;
  const { answers } = req.body;
  const form = await Form.findById(formId);
  form.responses.push({ answers });
  await form.save();
  res.json({ msg: 'Response submitted' });
};

exports.getResponses = async (req, res) => {
  const forms = await Form.find({ createdBy: req.userId });
  res.json(forms);
};

exports.getPublicForm = async (req, res) => {
  const { formId } = req.params;
  const form = await Form.findById(formId).select('title questions');
  res.json(form);
};
