const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // تمكين الـ CORS لكل الطلبات

// Routes
app.post('/api/reset-password', (req, res) => {
  const { email } = req.body;
  res.json({ message: `Password reset email sent to ${email}` });
});

app.post('/api/verify-code', (req, res) => {
  const { code, email } = req.body;
  res.json({ message: `Verification code ${code} validated for ${email}` });
});

app.post('/api/create-account', (req, res) => {
  const { username, email, password } = req.body;
  res.json({ message: `Account created for ${username} with email ${email}` });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  res.json({ message: `Logged in with email ${email}` });
});

app.post('/api/update-password', (req, res) => {
  const { password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    res.json({ message: 'Password updated successfully' });
  } else {
    res.status(400).json({ message: 'Passwords do not match' });
  }
});

app.post('/api/profile-update', (req, res) => {
  const { skill, phoneNumber, yearsOfExperience, pdf } = req.body;
  res.json({ message: `Profile updated with skill: ${skill}, phone: ${phoneNumber}, experience: ${yearsOfExperience}` });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

