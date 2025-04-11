// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//Geolocation.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Geolocation Example</title>
<style>
#location-info {
font-size: 18px;
margin-top: 20px;
}
</style>
</head>
<body>

<h1>Geolocation Example</h1>

<div id="location-info">
<strong>Latitude:</strong> <span id="latitude"></span><br>
<strong>Longitude:</strong> <span id="longitude"></span>
</div>

<script>

if (navigator.geolocation) {


navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {

showError("Geolocation is not supported by this browser.");
}


function showPosition(position) {


var latitude = position.coords.latitude;
var longitude = position.coords.longitude;


document.getElementById("latitude").textContent = latitude.toFixed(6);
document.getElementById("longitude").textContent = longitude.toFixed(6);
}


function showError(error) {
var errorMessage;

switch (error.code) {
case error.PERMISSION_DENIED:
errorMessage = "User denied the request for Geolocation.";
break;
case error.POSITION_UNAVAILABLE:
errorMessage = "Location information is unavailable.";
break;
case error.TIMEOUT:
errorMessage = "The request to get user location timed out.";
break;
case error.UNKNOWN_ERROR:
errorMessage = "An unknown error occurred.";
break;
default:

errorMessage = "An unspecified error occurred.";
break;
}


alert(errorMessage);
}
</script>

</body>
</html>


//local-starage.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Local Storage Example</title>
</head>
<body>

<h1>Local Storage Example</h1>

<button onclick="saveData()">Save Data</button>
<button onclick="retrieveData()">Retrieve Data</button>

<script>
// Function to save data to Local Storage
function saveData() {
// Get data from user (for simplicity, we're using a prompt here)
var userInput = prompt("Enter some data:");

// Check if the user entered something
if (userInput) {
// Save data to Local Storage with a specific key
localStorage.setItem("userData", userInput);
alert("Data saved to Local Storage!");
} else {
alert("Please enter some data.");
}
}

// Function to retrieve data from Local Storage
function retrieveData() {
// Retrieve data from Local Storage using the key
var storedData = localStorage.getItem("userData");

// Check if there is any stored data
if (storedData) {
alert("Data retrieved from Local Storage: " + storedData);
} else {
alert("No data found in Local Storage.");
}
}
</script>

</body>
</html>


//drag&drop api

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Drag and Drop Example</title>
<style>
#dragElement {
width: 100px;
height: 100px;
background-color: lightblue;
border: 2px solid darkblue;
margin: 10px;
padding: 10px;
cursor: move;
}
#dropZone {
width: 300px;
height: 200px;
background-color: lightgreen;
border: 2px dashed darkgreen;
margin-top: 20px;
padding: 10px;
}

</style>
</head>
<body>

<h1>Drag and Drop Example</h1>

<div id="dragElement" draggable="true" ondragstart="dragStart(event)">
Drag me!
</div>

<div id="dropZone" ondragover="allowDrop(event)" ondrop="drop(event)">
Drop here!
</div>

<script>
// Function to handle the drag start event
function dragStart(event) {
// Set data to be transferred during drag
event.dataTransfer.setData("text/plain", event.target.id);
}

// Function to allow dropping on the drop zone
function allowDrop(event) {
event.preventDefault(); //By default, when a form is submitted, the page reloads. Using
event.preventDefault()
}

// Function to handle the drop event
function drop(event) {
event.preventDefault();

// Get the dragged element's id from the data transfer
var draggedElementId = event.dataTransfer.getData("text/plain");

// Get the dragged element by id
var draggedElement = document.getElementById(draggedElementId);

// Append the dragged element to the drop zone
document.getElementById("dropZone").appendChild(draggedElement);
}
</script>

</body>
</html>


  `;
  res.json({ code: codeString });
});

module.exports = router;
