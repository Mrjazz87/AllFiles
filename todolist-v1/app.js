const bodyParser = require("body-parser");
const express = require("express");
var request = require("request");
const app = express();
const date = require(__dirname + "/date.js");
var port = 3000;
let ejs = require("ejs");
let items = [];
let workItems = [];

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    let day = date.getDay();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", function (req, res) {
    item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post("/work", function (req, res) {
    var item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.listen(process.env.PORT || port, function () {
    console.log("Port is running on port " + port);
});