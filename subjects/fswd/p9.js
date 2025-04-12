// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
node-mongo-crud/
├── models/
│   └── User.js
├── views/
│   ├── index.ejs
│   ├── edit.ejs
├── server.js
├── .env
├── package.json

.env
MONGO_URI=mongodb://127.0.0.1:27017/user-crud

//user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);

//server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error(err));

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
});

app.post('/add', async (req, res) => {
  const { name, email } = req.body;
  await User.create({ name, email });
  res.redirect('/');
});

app.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('edit', { user });
});

app.post('/update/:id', async (req, res) => {
  const { name, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, email });
  res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});

//index.ejs
<!DOCTYPE html>
<html>
<head>
  <title>MongoDB CRUD</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-10">
  <h1 class="text-2xl font-bold mb-6">User List</h1>

  <form action="/add" method="POST" class="mb-6 flex gap-4">
    <input type="text" name="name" placeholder="Name" class="p-2 border rounded" required>
    <input type="email" name="email" placeholder="Email" class="p-2 border rounded" required>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
  </form>

  <table class="w-full bg-white rounded shadow">
    <thead>
      <tr class="bg-gray-200 text-left">
        <th class="p-2">Name</th>
        <th class="p-2">Email</th>
        <th class="p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <% users.forEach(user => { %>
        <tr class="border-t">
          <td class="p-2"><%= user.name %></td>
          <td class="p-2"><%= user.email %></td>
          <td class="p-2">
            <a href="/edit/<%= user._id %>" class="text-blue-600">Edit</a> |
            <a href="/delete/<%= user._id %>" class="text-red-600">Delete</a>
          </td>
        </tr>
      <% }) %>
    </tbody>
  </table>
</body>
</html>

//edit.ejs
<!DOCTYPE html>
<html>
<head>
  <title>Edit User</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-10">
  <h1 class="text-2xl font-bold mb-6">Edit User</h1>

  <form action="/update/<%= user._id %>" method="POST" class="space-y-4">
    <input name="name" value="<%= user.name %>" class="w-full p-2 border rounded" required>
    <input name="email" value="<%= user.email %>" class="w-full p-2 border rounded" required>
    <button class="bg-green-500 text-white px-4 py-2 rounded">Update</button>
    <a href="/" class="ml-4 text-blue-500">Cancel</a>
  </form>
</body>
</html>




  `;
  res.json({ code: codeString });
});

module.exports = router;
