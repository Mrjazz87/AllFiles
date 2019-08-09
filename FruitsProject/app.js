const mongoose = require('mongoose');
// Connection URL

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Why no fruit?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: "Nice in the summer"
})

// const banana = new Fruit({
//     name: "banana",
//     rating: 8,
//     review: "Best snack"
// })

// const orange = new Fruit({
//     name: "orange",
//     rating: 6,
//     review: "Too sweet"
// })


// fruit.save()

// Fruit.insertMany([banana, orange, strawberry], function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("More fruits in my fruitDB!")
//     }
// })

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err)
    } else {
        // console.log(fruits)
        fruits.forEach(function (f) {
            console.log(f.name)

            mongoose.connection.close();
        })
    }
})

// Fruit.updateOne({
//     _id: "5d471b140f123938246de669"
// }, {
//     name: "Raspberry"
// }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Updated record!")
//     }
// })

// Fruit.deleteOne({
//     _id: "5d471b140f123938246de669"
// }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Deleted record!")
//     }
// })

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const Raspberry = new Fruit({
    name: "Raspberry",
    rating: 10,
    review: "makes the best jam"
})

Raspberry.save()

Person.updateOne({
    name: "John"
}, {
    favouriteFruit: Raspberry
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("John was updated")
    }
})

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: Pineapple
// })

// person.save()

// Person.deleteMany({
//     name: "John",
//     age: 37
// }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Succesfully deleted many objects")
//     }
// })