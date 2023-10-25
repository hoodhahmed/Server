// Requiring express in our server 
const express = require('express'); 
const app = express(); 

// Defining get request at '/' route 
app.get('/', function(req, res) { 
res.json({ 
  message: 'Hello World',
  data: {
    name: 'John Doe',
    age: 25
  }
}); 
}); 

// Defining get request at '/multiple' route 
app.get('/pubg', function(req, res) { 
res.json({ 
	number: 1, 
	name: 'John', 
	gender: 'male'
}); 
}); 



// Setting the server to listen at port 3000 
app.listen(3000, function(req, res) { 
console.log("Server is running at port 3000"); 
}); 
