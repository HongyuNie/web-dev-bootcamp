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

app.post('/cats', (req, res) => { 
    // console.log("CAT REQUEST!!")
    res.send('CATS POSTS REQUEST!')
})

app.get('/dogs', (req, res) => { 
    // console.log("DOG REQUEST!!")
    res.send('WOOOOOF!')
})

app.get('/', (req, res) => { 
    res.send('WELCOME TO ANIMALS SOUNDS PAGE!')
})

//pattern match
app.get('/r/:subreddit', (req, res) => {
    // console.log(req.params)
    const { subreddit } = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`)
    // res.send('SUBREDDIT ALERT!!!')
})


//more pattern match
app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params)
    const { subreddit, postId } = req.params
    res.send(`<h1>Viewing the Post ID: ${postId} on the ${subreddit} subreddit </h1>`)
    // res.send('SUBREDDIT ALERT!!!')
})

//routes are matched in order, if put this in above, /cats or /dogs will both be unknown. * means matchs any single request
app.get('*', (req, res) => { 
    res.send('IDK...')
})