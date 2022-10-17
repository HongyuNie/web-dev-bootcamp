const { resolveSoa } = require('dns');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs') //a key value pair

app.set('views', path.join(__dirname, '/views'));//using the directory name where index.js is located. allow you to run outside the correct folder
    
app.get('/', (req, res) => { 
    res.render('home');
})
 
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10 + 1);
    res.render('random', {rand: num});
})

app.listen(3000, () => { 
    console.log("LISTENING ON PORT 3000")
})