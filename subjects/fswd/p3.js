// subjects/os/p2.js
const express = require("express");
const router = express.Router();

// GET /os/p2
router.get("/", (req, res) => {
  const codeString = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Web Page</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      padding: 20px;
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    

    h1 {
      font-size: 6vw;
      text-align: center;
      margin-bottom: 20px;
    }
    

    .section {
      margin-bottom: 40px;
      text-align: center;
    }
    

    .responsive-img {
      width: 100%;      
      max-width: 100%;  
      height: auto;     
    }
    

    @media (max-width: 700px) {
      h1 {
        font-size: 8vw; 
      }
    }
    
    @media (max-width: 400px) {
      h1 {
        font-size: 10vw; 
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="section">
      <h1>NIRMA UNIVERSITY</h1>
      <p>This page demonstrates various responsive design techniques.</p>
    </header>
    
    <section class="section">
      <h2>Responsive Image</h2>
      <img src="nirma.jpg" alt="Sample Image" class="responsive-img">
      <p>The image adjusts its size based on the browser width while maintaining its aspect ratio.</p>
    </section>
    
    <section class="section">
      <h2>Responsive Text Using VW Unit</h2>
      <p style="font-size: 4vw;">
        This text scales based on the viewport width. Resize the browser to see it change!
      </p>
    </section>
    
    <section class="section">
      <h2>Media Queries in Action</h2>
      <p>
        Resize the browser window to see how the text size and layout adjust using media queries.
      </p>
    </section>
  </div>
</body>
</html>

  `;
  res.json({ code: codeString });
});

module.exports = router;
