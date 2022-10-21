const express = require('express');
const app = express();
const path = require('path');

// running on every single request
// use this middleware to parse the req.body as url encoded data
app.use(express.urlencoded({ extended: true }));
// for parsing incoming json payloads
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        // id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        // id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        // id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        // id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})


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