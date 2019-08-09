const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, function () {
    console.log("Listening on Port: " + port);
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    // console.log(req.body.crypto)
    var crypto = req.body.crypto;
    var currency = req.body.fiat;
    var amount = req.body.amount;

    var options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs: {
            from: crypto,
            to: currency,
            amount: amount
        }
    };




    request(options, function (error, response, body) {
        var data = JSON.parse(body);
        var price = data.price;
        var date = data.time;

        res.write("<p>The current date is " + date + "</p>");
        res.write(`<h1>The price of ${amount} ${crypto} is ${price} in ${currency}</h1>`);

        res.send();
    });
});