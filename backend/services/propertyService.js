const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.argv.slice(2)[0];
const app = express();
app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control' }));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    console.log('sending powers list!')
    res.send(
        [{
            title: "Hello Properties!",
            description: "Hi there! How are you?"
        }]
    )
})

console.log(`Heroes service listening on port ${port}`);
app.listen(port);