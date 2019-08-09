//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];


/* Mongoose parts */
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true
});

// Mongoose schema
const items = {
  name: String
}

// Mongoose Model
const Item = mongoose.model("Item", items);

// Three default documents
const item1 = new Item({
  name: "Buy Food"
});

const item2 = new Item({
  name: "Sleep"
});

const item3 = new Item({
  name: "Go to gym"
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [items]
}

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  Item.find({}, function (err, list) {
    if (defaultItems.length === 0) {
      //Insert our default documents to DB
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Default items added")
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {
        listTitle: "Today",
        newListItems: list
      });
    }
  });
});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  item.save();
  res.redirect("/");
});

app.get("/:list", function (req, res) {
  const requestedList = req.params.list;


  List.findOne({
    name: requestedList
  }, function (err, docs) {
    if (err) {
      console.log(err);
    } else if (!err) {
      if (docs) {
        //Show existing list
        res.render("list", {
          listTitle: requestedList,
          newListItems: docs.items
        })
      } else {
        //Create new list
        const list = new List({
          name: requestedList,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + requestedList)
      }
    }
  });



});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;

  Item.deleteOne({
    "_id": checkedItemId
  }, function (err) {
    if (err) {
      console.log(err)
    } else {
      res.redirect("/");
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});