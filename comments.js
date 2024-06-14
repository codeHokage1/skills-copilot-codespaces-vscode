// Create web server
const express = require('express');
const app = express();
// Create web server
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const commentsPath = path.join(__dirname, 'comments.json');
const comments = require(commentsPath);
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = Date.now();
    comments.push(comment);
    fs.writeFile(commentsPath, JSON.stringify(comments), err => {
        if (err) {
            return res.status(500).send('Error');
        }
        res.status(201).send('Comment added');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Run server
// node comments.js
// Open browser and go to http://localhost:3000/comments
// To add a comment, we can use curl
// curl -X POST -d "name=John&message=Hello" http://localhost:3000/comments
// Or use Postman
// To install Postman, go to https://www.getpostman.com/
// Open Postman and create a new POST request with URL http://localhost:3000/comments
// In the Body tab, select x-www-form-urlencoded and add name and message fields
// Click Send button
// Refresh the browser to see the new comment
// That's it! We have a simple web server that can store comments in a file.
