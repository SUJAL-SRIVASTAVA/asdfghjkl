// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //Index.html

  <!DOCTYPE html>
<html>

<body style="background-color: rgb(45, 44, 44);text-align: center;color :rgb(202, 234, 234)">
    <h1 style="color:rgb(215, 237, 237)">
        Sujal Srivastava welcomes you!!
    </h1>
    <button id="btn">Click Here</button>
    <p>
        Count : <span id="display">0</span>
    </p>
    <script>
        let count = 0;
        let btn = document.getElementById("btn");
        let disp = document.getElementById("display");
        
        btn.onclick = function () {
                    count++;
        disp.innerHTML = count;
        }
    </script>
</body>
</html>

//app.js

const fs = require('fs');
const jsonObject = {
name: 'Sujal Srivastava',
age: 19,
city: 'Science City',
};
const jsonString = JSON.stringify(jsonObject, null, 2);
const filePath = 'output.json';
fs.writeFile(filePath, jsonString, 'utf-8', (err) => {
if (err) {
console.error('Error writing to file:', err);
} else {
console.log('JSON object has been stored in', filePath);
}
});


  `;
  res.json({ code: codeString });
});

module.exports = router;
