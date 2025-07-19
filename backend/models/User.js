// const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });
// module.exports = mongoose.model('User', UserSchema);


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  phone:     { type: String, required: true },
  role:      { type: String, enum: ['admin', 'user'], default: 'user' },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
