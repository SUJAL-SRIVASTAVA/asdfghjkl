// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

login-app/
├── views/
│   ├── login.ejs
│   ├── signup.ejs
│   └── dashboard.ejs
├── models/
│   └── User.js
├── .env
├── server.js
├── package.json

package.json
{
  "name": "login-app",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "bcrypt": "^5.1.0",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mongoose": "^7.6.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}


.env
MONGO_URI=mongodb://127.0.0.1:27017/login-app

server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const User = require('./models/User');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error(err));

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.redirect('/login'));

app.get('/login', (req, res) => res.render('login', { error: null }));
app.get('/signup', (req, res) => res.render('signup', { error: null }));

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const existing = await User.findOne({ username });
    if (existing) return res.render('signup', { error: 'Username already exists' });

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash });
    await user.save();
    res.redirect('/login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password)))
        return res.render('login', { error: 'Invalid credentials' });

    res.render('dashboard', { username: user.username });
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));

user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);

login.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center h-screen bg-gray-100">
  <form method="POST" action="/login" class="bg-white p-8 rounded shadow-md w-96">
    <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
    <% if (error) { %>
      <p class="text-red-500 text-sm mb-2"><%= error %></p>
    <% } %>
    <input type="text" name="username" placeholder="Username" class="w-full p-2 border rounded mb-4">
    <input type="password" name="password" placeholder="Password" class="w-full p-2 border rounded mb-4">
    <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
    <p class="mt-4 text-sm text-center">Don't have an account? <a href="/signup" class="text-blue-500">Sign Up</a></p>
  </form>
</body>
</html>

signup.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center h-screen bg-gray-100">
  <form method="POST" action="/signup" class="bg-white p-8 rounded shadow-md w-96">
    <h2 class="text-2xl font-bold mb-4 text-center">Sign Up</h2>
    <% if (error) { %>
      <p class="text-red-500 text-sm mb-2"><%= error %></p>
    <% } %>
    <input type="text" name="username" placeholder="Username" class="w-full p-2 border rounded mb-4">
    <input type="password" name="password" placeholder="Password" class="w-full p-2 border rounded mb-4">
    <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Sign Up</button>
    <p class="mt-4 text-sm text-center">Already have an account? <a href="/login" class="text-blue-500">Login</a></p>
  </form>
</body>
</html>

dashboard.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center h-screen bg-blue-100">
  <div class="bg-white p-10 rounded shadow-md text-center">
    <h1 class="text-3xl font-bold mb-4">Welcome, <%= username %>!</h1>
    <p class="text-gray-700">You are now logged in.</p>
  </div>
</body>
</html>

npm install
mongod
npm run dev






  `;
  res.json({ code: codeString });
});

module.exports = router;
