const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const index = "/index.html";

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + index)
    // console.log(__dirname + index);
})

app.post("/", function (req, res) {
    // var num1 = Number(req.body.num1);
    // var num2 = Number(req.body.num2);
    // var result = num1 + num2;
    res.send("Your age is: " + req.body.age + "<br>" + "And you have a: " + req.body.car);
});

app.listen(port, function () {
    console.log(`Listening on Port: ${port}`);
});