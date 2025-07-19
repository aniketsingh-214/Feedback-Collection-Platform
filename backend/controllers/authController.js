const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// exports.register = async (req, res) => {
//   const { email, password } = req.body;
//   const hash = await bcrypt.hash(password, 10);
//   const user = await User.create({ email, password: hash });
//   res.status(201).json({ msg: 'User created' });
// };

exports.register = async (req, res) => {
  const { firstName, lastName, phone, role, email, password } = req.body;

  if (!firstName || !lastName || !phone || !email || !password || !role) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ msg: 'User already exists' });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    firstName,
    lastName,
    phone,
    role,
    email,
    password: hash,
  });

  res.status(201).json({ msg: 'User registered successfully' });
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};
