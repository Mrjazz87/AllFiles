const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log(`Server started on port ${port}`)
});

app.get('/', (req, res) => res.send('<h1>Hello World</h1>'));

app.get('/contact', (req, res) => res.send("Contact me at: example@email.com"));

app.get('/about', (req, res) => res.send("Hi, my name is jesper and i'm 31 years old"));

app.get('/pets', (req, res) => res.send("My pet's name is Freya"));