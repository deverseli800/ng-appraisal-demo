const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(
        {
            title: "Hello World!",
            description: "Hi there! How are you?"
        }
    )
})

console.log(`Heroes service listening on port ${port}`);
app.listen(port);