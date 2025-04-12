// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <h1>hiii from vue.js</h1>
    <div id="app">
        <h2>{{appName}}</h2>
        <h2 v-uppercase>click this sentence to convert it into uppercase</h2>
        
        <ul>
            <li v-for="items in fruits">{{items}}</li>
        </ul>
        <button @click="addToList">Click to add fruits</button>
    </div>
    
    
    <script src="app.js"></script>
</body>
</html> 

//app.js
// console.log("hello");

const options={
    data(){
        return {
            appName:"VueApp",
            fruits:["apple","mango","pears","kiwi","guava"]
        };
    },
    methods:{
        addToList(){
            this.fruits.push("aam");
    }

    },

    directives:{
        uppercase:{
            mounted(el){
                el.addEventListener("click",()=>{
                    el.textContent=el.textContent.toUpperCase();
                });
            }
        }
    }
};


const app = Vue.createApp(options);
const vm = app.mount("#app");


//dynamic_list.html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Custom Directive Example</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

<div id="app">
<ul v-list="items"></ul>
</div>

<script src="app.js"></script>
</body>
</html>

//app.js
Vue.directive('list', {
bind(el, binding) {
const ul = document.createElement('ul'); // Create a new <ul> element

binding.value.forEach(item => { // Iterate over each item in the binding value
const li = document.createElement('li'); // Create a new <li> element
li.textContent = item; // Set the text content of the <li> element to the
current item
ul.appendChild(li); // Append the <li> element to the <ul> element
});
el.appendChild(ul); // Append the <ul> element to the bound element (the
element the directive is applied to)
}
});

// Create a new Vue instance

new Vue({
el: '#app', // Mount the Vue instance to the element with the ID 'app'
data: {
items: ['Subject-1', 'Subject-2', 'Subject-3','Subject-4'] // Sample list of items
}
});



//v-date.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Custom Directive for Date Formatting</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

<div id="app">
<p v-format-date="date"> <!-- Apply the custom directive -->
<!-- The content will be manipulated by the custom directive -->
</p>
</div>

<script>
// Define the custom directive named 'format-date'
Vue.directive('format-date', {
// When the bound element is inserted into the DOM...
inserted: function(el, binding) {
// Get the date from the binding value
const date = binding.value;

// Format the date into a human-readable format
const formattedDate = formatDate(date);

// Update the element's content with the formatted date
el.textContent = formattedDate;
}
});

// Create a new Vue instance
new Vue({
el: '#app',
data: {
date: '2022-03-05T12:00:00' // Sample date
}
});

// Helper function to format the date
function formatDate(dateString)
{
const options = { year: 'numeric', month: 'long', day: 'numeric' };
return new Date(dateString).toLocaleDateString('en-US', options);
}
</script>

</body>

</html>

  `;
  res.json({ code: codeString });
});

module.exports = router;
