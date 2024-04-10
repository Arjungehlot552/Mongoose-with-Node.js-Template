const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

// Connect to 
async function main(){
    await mongoose.connect('mongodb://localhost/myDatabase')
};


// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});