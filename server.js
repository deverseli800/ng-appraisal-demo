const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static')
const port = process.argv.slice(2)[0] || 8080;
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

app.use('/', serveStatic(path.join(__dirname, '/client/dist')))


console.log(`Heroes service listening on port ${port}`);
app.listen(port);