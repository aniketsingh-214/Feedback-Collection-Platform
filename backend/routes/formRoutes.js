const express = require('express');
const {
  createForm, submitResponse, getResponses, getPublicForm
} = require('../controllers/formController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, createForm);
router.get('/my', auth, getResponses);
router.get('/public/:formId', getPublicForm);
router.post('/submit/:formId', submitResponse);

module.exports = router;
