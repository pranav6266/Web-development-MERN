const express = require('express');
const app = express();
const HOST = "localhost";
const PORT = 8000;

// First checks the method, then it checks the path, then works.
// GET Method
app.get("/", (req, res) => {
    res.send("Hi from my Index Page.....");
});

app.get("/home", (req, res) => {
    res.send("My home page....");
})

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.log(`Server could not be started because of ${err}`);
    }else {
        console.log(`Server started on port http://${HOST}:${PORT}`);
    }
});