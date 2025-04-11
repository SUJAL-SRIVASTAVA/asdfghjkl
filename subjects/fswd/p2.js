// subjects/os/p2.js
const express = require("express");
const router = express.Router();

// GET /os/p2
router.get("/", (req, res) => {
  const codeString = `
  //.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo List App</title>
  <style>

    body {
      font-family: Arial, sans-serif;
      background-color: #000000;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
}

    .container {
      background-color: #5c5a5a;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }

    #taskInput {
      width: 70%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 10px;
    }

    button {
      padding: 10px 15px;
      background-color: #2f2f30;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background-color: #0056b3;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 20px 0 0;
      text-align: left;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f8f9fa;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    li.completed {
      text-decoration: line-through;
      color: #6c757d;
    }

    .remove-btn {
      background: none;
      border: none;
      color: #dc3545;
      font-size: 1.2rem;
      cursor: pointer;
    }

    .remove-btn:hover {
      color: #a71d2a;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Todo List App</h1>
    <div>
      <input type="text" id="taskInput" placeholder="Add a new task">
      <button onclick="addTask()">Add Task</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script>
    let tasks = [
      { id: 1, text: 'Complete assignment', completed: false },
      { id: 2, text: 'Go to gym', completed: true },
      { id: 3, text: 'read books', completed: false }
    ];

    function displayTasks() {
      const taskListElement = document.getElementById('taskList');
      taskListElement.innerHTML = '';

      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
          li.classList.add('completed');
        }

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = (e) => {
          e.stopPropagation();
          removeTask(task.id);
        };

        li.onclick = () => toggleTaskStatus(task.id);
        li.appendChild(removeBtn);
        taskListElement.appendChild(li);
      });
    }

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const newTaskText = taskInput.value.trim();

      if (newTaskText !== '') {
        const newTask = {
          id: tasks.length + 1,
          text: newTaskText,
          completed: false
        };

        tasks.push(newTask);
        displayTasks();
        taskInput.value = '';
      }
    }

    function toggleTaskStatus(taskId) {
      const taskIndex = tasks.findIndex(task => task.id === taskId);

      if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        displayTasks();
      }
    }

    function removeTask(taskId) {
      tasks = tasks.filter(task => task.id !== taskId);
      displayTasks();
    }

    displayTasks();
  </script>
</body>
</html>


  `;
  res.json({ code: codeString });
});

module.exports = router;
