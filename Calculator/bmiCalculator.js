const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/bmiCalc", function (req, res) {
    res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/bmiCalc", function (req, res) {
    var bmi = (req.body.weight / Math.pow(req.body.height, 2));
    res.send("Your BMI is " + bmi);
});

app.listen(port, function () {
    console.log("Listening on port: " + port);
});