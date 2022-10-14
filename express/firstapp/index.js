// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
const express = require("express");
const app = express();


app.listen(8080, () => { 
    console.log("LISTENING ON PORT 8080!")
})

//request is an object created by express based upon the incoming HTTP request
app.get('/cats', (req, res) => { 
    // console.log("CAT REQUEST!!")
    res.send('MEOOOOWW!')
})