// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

node-mysql-crud/
├── views/
│   ├── index.ejs
│   ├── edit.ejs
├── server.js
├── db.js
├── package.json

//in XAMPP
CREATE DATABASE node_crud;
USE node_crud;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

//db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',        // default XAMPP MySQL password is empty
  database: 'node_crud'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = db;

//server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Home - Read All
app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.render('index', { users: results });
  });
});

// Create User
app.post('/add', (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Delete User
app.get('/delete/:id', (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Edit Form
app.get('/edit/:id', (req, res) => {
  db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.render('edit', { user: results[0] });
  });
});

// Update User
app.post('/update/:id', (req, res) => {
  const { name, email } = req.body;
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});

//index.ejs
<!DOCTYPE html>
<html>
<head>
  <title>User Management</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-10 bg-gray-100">
  <h1 class="text-2xl font-bold mb-4">User List</h1>

  <form action="/add" method="POST" class="mb-6 flex gap-4">
    <input name="name" placeholder="Name" class="p-2 border rounded" required>
    <input name="email" placeholder="Email" class="p-2 border rounded" required>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
  </form>

  <table class="table-auto w-full bg-white rounded shadow">
    <thead>
      <tr class="bg-gray-200">
        <th class="p-2">ID</th>
        <th class="p-2">Name</th>
        <th class="p-2">Email</th>
        <th class="p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <% users.forEach(user => { %>
        <tr>
          <td class="p-2"><%= user.id %></td>
          <td class="p-2"><%= user.name %></td>
          <td class="p-2"><%= user.email %></td>
          <td class="p-2">
            <a href="/edit/<%= user.id %>" class="text-blue-600">Edit</a> |
            <a href="/delete/<%= user.id %>" class="text-red-600">Delete</a>
          </td>
        </tr>
      <% }); %>
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
<body class="p-10 bg-gray-100">
  <h1 class="text-2xl font-bold mb-4">Edit User</h1>

  <form action="/update/<%= user.id %>" method="POST" class="space-y-4">
    <input name="name" value="<%= user.name %>" class="p-2 border rounded w-full" required>
    <input name="email" value="<%= user.email %>" class="p-2 border rounded w-full" required>
    <button class="bg-green-500 text-white px-4 py-2 rounded">Update</button>
    <a href="/" class="text-blue-500 ml-4">Cancel</a>
  </form>
</body>
</html>

  `;
  res.json({ code: codeString });
});

module.exports = router;
