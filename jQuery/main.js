$("h1").addClass("big-title big-margin");

var buttons = $("button").css("font-size", "1rem");
//console.log(buttons);

// $(document).keydown(function (e) {
//     $("h1").text(e.key);
// });

function eventTrigger(property, eventTrigger) {
    $(property).on(eventTrigger, function (e) {
        //console.log(e.key);
        // $("h1").fadeToggle();
        $("h1").slideUp().slideDown().animate({
            opacity: 0.5
        });
    })
}

eventTrigger("button", "click");


db.products.insert({
    _id: 1,
    name: "Pen",
    price: 1.2,
    stock: 32,
    reviews: [{
            author: "Jesper",
            rating: 5,
            review: "Best pen!"
        },
        {
            author: "Sally",
            rating: 4,
            review: "Awesome!"
        }
    ]
})