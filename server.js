/* src/index.js */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({
        message: 'Hello, world!'
    });
});

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
})

module.exports = app;