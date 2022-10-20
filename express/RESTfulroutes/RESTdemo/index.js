const express = require('express');
const app = express();

// running on every single request
// use this middleware to parse the req.body as url encoded data
app.use(express.urlencoded({ extended: true }));
// for parsing incoming json payloads
app.use(express.json());

app.get('/tacos', (req, res) => { 
    res.send("GET /tacos response");
}) 

app.post('/tacos', (req, res) => {
    // console.log(req.body);
    const { meat, qty } = req.body;
    res.send(`OK, here are you ${qty} ${meat} tacos!!`);
})
app.listen(3000, () => {
    console.log("ON PORT 3000")
})